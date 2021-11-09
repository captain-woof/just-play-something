import { ITracks } from "../../../types/track";
import { LoadedTracksAction, LoadedTracksOffsetAction, LoadedTracksStatusAction } from "../actions/loadedTracks";
import { ActionTypes } from "../constants";

type LoadedTracks = {
    tracks: ITracks
    pending: boolean
    error: boolean
}

const initialState: LoadedTracks = {
    tracks: [],
    error: false,
    pending: false
}

export const loadedTracksReducer = (state: LoadedTracks = initialState, action: LoadedTracksAction | LoadedTracksOffsetAction | LoadedTracksStatusAction): LoadedTracks => {
    switch (action.type) {
        case ActionTypes.SET_LOADED_TRACKS:
            return { ...state, tracks: state.tracks.concat(action.payload as ITracks) }
        case ActionTypes.SET_LOADED_TRACKS_PENDING:
            return { ...state, pending: action.payload as boolean }
        case ActionTypes.SET_LOADED_TRACKS_ERROR:
            return { ...state, error: action.payload as boolean }
        default:
            return state
    }
}