import { useCallback } from "react"
import { ITrack, ITracks } from "../types/track"
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../lib/redux/store'
import { getCurrentTrackAction } from "../lib/redux/actions/currentTrack"
import { getLoadedTracksAction, getLoadedTracksErrorAction, getLoadedTracksPendingAction } from "../lib/redux/actions/loadedTracks"
import { useQuery } from "./query"
import { getFetchUrl } from "../utils/query"

// Hook to fetch and merge new tracks with existing ones
export const useTracks = () => {
    // Fetch tracks state
    const error = useSelector((state: RootState) => state.loadedTracks.error)
    const pending = useSelector((state: RootState) => state.loadedTracks.pending)
    const tracks = useSelector((state: RootState) => state.loadedTracks.tracks)
    const { query, setOffset } = useQuery()

    // Dispatch
    const dispatch = useDispatch()

    // Function to fetch tracks, increment offset and set status states
    const fetchTracks = useCallback(async () => {
        // Set initial stats
        dispatch(getLoadedTracksPendingAction(true))
        dispatch(getLoadedTracksErrorAction(false))
        // Fetch tracks from Jamendo
        const res = await fetch(getFetchUrl(query))
        const res_json = await res.json()
        // Detect if error occurred
        if (res_json.headers.status !== 'success') {
            dispatch(getLoadedTracksPendingAction(false))
            dispatch(getLoadedTracksErrorAction(true))
            return
        }
        // Set newly fetched tracks to state
        const newTracksData: ITracks = res_json.results
        dispatch(getLoadedTracksAction(newTracksData.map((newTrackData, index) => ({
            ...newTrackData,
            index: index + tracks.length
        }))))

        // Set stats after new data is set
        setOffset(query.offset + query.limit)
        dispatch(getLoadedTracksPendingAction(false))
        dispatch(getLoadedTracksErrorAction(false))
    }, [dispatch, tracks.length, setOffset, query])

    return {
        error,
        pending,
        tracks,
        fetchTracks
    }
}

// Hook to get and set current track
export const useCurrentTrack = () => {
    const currentTrack = useSelector((state: RootState) => state.currentTrack)
    const dispatch = useDispatch()
    const setCurrentTrack = useCallback((newTrack: ITrack) => {
        dispatch(getCurrentTrackAction(newTrack))
    }, [dispatch])
    return ({
        currentTrack,
        setCurrentTrack,
    })
}