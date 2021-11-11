import { ProgressPendingAction } from "../actions/progressPending";
import { ActionTypes } from "../constants";

export const progressPendingReducer = (pendingProgress: boolean = false, action: ProgressPendingAction) => {
    switch (action.type) {
        case ActionTypes.SET_PROGRESS_PENDING:
            return action.payload
        default:
            return pendingProgress
    }
}