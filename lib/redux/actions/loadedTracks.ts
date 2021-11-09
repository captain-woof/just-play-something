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

export type LoadedTracksOffsetAction = {
    type: ActionTypes
    payload: number
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