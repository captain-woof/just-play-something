import { ITrack } from "../../../types/track"
import { ICurrentTrackAction } from "../actions/currentTrack"
import { ActionTypes } from "../constants"

export const currentTrackReducer = (state: ITrack | null = null, action: ICurrentTrackAction): ITrack | null => {
    switch (action.type) {
        case ActionTypes.SET_CURRENT_TRACK:
            return (action.payload ? action.payload : state)
        default:
            return state
    }
}