import { ITrack } from "../../../types/track";
import { ActionTypes } from "../constants";

export interface ICurrentTrackAction {
    type: ActionTypes.SET_CURRENT_TRACK
    payload: ITrack
}

export const getCurrentTrackAction = (track: ITrack): ICurrentTrackAction => ({
    type: ActionTypes.SET_CURRENT_TRACK,
    payload: track
})