import { useCallback } from "react"
import { ITrack, ITracks } from "../types/track"
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../lib/redux/store'
import { getCurrentTrackAction } from "../lib/redux/actions/currentTrack"
import { getClearAndLoadedTracksAction, getLoadedTracksAction, getLoadedTracksErrorAction, getLoadedTracksPendingAction } from "../lib/redux/actions/loadedTracks"
import { useQuery } from "./query"
import { getFetchUrl } from "../utils/query"
import { useProgressPending } from "./progressPending"

// Hook to fetch and merge new tracks with existing ones
export const useTracks = () => {
    // Fetch tracks state
    const error = useSelector((state: RootState) => state.loadedTracks.error)
    const pending = useSelector((state: RootState) => state.loadedTracks.pending)
    const tracks = useSelector((state: RootState) => state.loadedTracks.tracks)
    const { query, setOffset } = useQuery()

    // Dispatch
    const dispatch = useDispatch()

    // Function to set tracks manually, with PRELOADED DATA
    const setTracks = useCallback((tracks: ITracks) => {
        dispatch(getClearAndLoadedTracksAction(tracks.map((newTrackData, index) => ({
            ...newTrackData,
            index
        }))))
    }, [dispatch])

    // Function to fetch tracks, increment offset and set status states
    const { setProgressPending } = useProgressPending()
    const fetchTracks = useCallback(async (mergeWithPrev: boolean = true) => {
        // Set initial stats
        setProgressPending(true)
        dispatch(getLoadedTracksPendingAction(true))
        dispatch(getLoadedTracksErrorAction(false))
        // Fetch tracks from Jamendo
        const res = await fetch(getFetchUrl(query), { credentials: 'omit' })
        const res_json = await res.json()
        // Detect if error occurred
        if (res_json.headers.status !== 'success') {
            dispatch(getLoadedTracksPendingAction(false))
            dispatch(getLoadedTracksErrorAction(true))
            setProgressPending(false)
            return
        }
        // Set newly fetched tracks to state
        const newTracksData: ITracks = res_json.results
        // Check if new tracks should be appended or set as new, fresh ones
        if (mergeWithPrev) {
            // Merge with previous tracks
            dispatch(getLoadedTracksAction(newTracksData.map((newTrackData, index) => ({
                ...newTrackData,
                index: index + tracks.length
            }))))
            setOffset(query.offset + query.limit)
        } else {
            // Clear previous tracks, use new ones
            dispatch(getClearAndLoadedTracksAction(newTracksData.map((newTrackData, index) => ({
                ...newTrackData,
                index
            }))))
            setOffset(0)
        }

        // Set stats after new data is set
        dispatch(getLoadedTracksPendingAction(false))
        dispatch(getLoadedTracksErrorAction(false))
        setProgressPending(false)
    }, [dispatch, tracks.length, setOffset, query, setProgressPending])

    return {
        error,
        pending,
        tracks,
        fetchTracks,
        setTracks
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