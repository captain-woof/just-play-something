import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../lib/redux/store"
import { getProgressPendingAction } from '../lib/redux/actions/progressPending'

export const useProgressPending = () => {
    const pendingProgress = useSelector((state: RootState) => state.pendingProgress)
    const dispatch = useDispatch()
    const setProgressPending = useCallback((pendingProgress: boolean) => {
        dispatch(getProgressPendingAction(pendingProgress))
    }, [dispatch])

    return {
        pendingProgress,
        setProgressPending: setProgressPending
    }
}