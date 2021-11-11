import { ITracks } from "../../../types/track";
import { ActionTypes } from "../constants";

// Action types
export type LoadedTracksAction = {
    type: ActionTypes
    payload: ITracks
}

export type LoadedTracksStatusAction = {
    type: ActionTypes
    payload: boolean
}

// Action generators
export const getLoadedTracksPendingAction = (pending: boolean) => ({
    type: ActionTypes.SET_LOADED_TRACKS_PENDING,
    payload: pending
})

export const getLoadedTracksErrorAction = (error: boolean) => ({
    type: ActionTypes.SET_LOADED_TRACKS_ERROR,
    payload: error
})

export const getLoadedTracksAction = (tracks: ITracks) => ({
    type: ActionTypes.SET_LOADED_TRACKS,
    payload: tracks
})

export const getClearAndLoadedTracksAction = (tracks: ITracks) => ({
    type: ActionTypes.CLEAR_AND_SET_LOADED_TRACKS,
    payload: tracks
})