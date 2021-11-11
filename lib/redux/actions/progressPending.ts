import { ActionTypes } from "../constants"

export const getProgressPendingAction = (isPending: boolean): ProgressPendingAction => ({
    type: ActionTypes.SET_PROGRESS_PENDING,
    payload: isPending
})

export type ProgressPendingAction = {
    type: ActionTypes.SET_PROGRESS_PENDING,
    payload: boolean
}