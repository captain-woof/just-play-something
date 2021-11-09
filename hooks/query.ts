import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getQueryBoostAction, getQueryLimitAction, getQueryOffsetAction, getQueryOrderAction, getQueryTagAction, getQueryTypeAction } from '../lib/redux/actions/query'
import { RootState } from '../lib/redux/store'
import { QueryOffset, QueryLimit, QueryOrder, QueryType, QueryBoost, QueryTag } from '../types/query'

// Hook to get query and query setters
export const useQuery = () => {
    const query = useSelector((state: RootState) => state.query)
    const dispatch = useDispatch()

    // Setters to change query
    const setLimit = useCallback((limit: QueryLimit) => {
        dispatch(getQueryLimitAction(limit))
    }, [dispatch])
    const setOffset = useCallback((offset: QueryOffset) => {
        dispatch(getQueryOffsetAction(offset))
    }, [dispatch])
    const setOrder = useCallback((order: QueryOrder) => {
        dispatch(getQueryOrderAction(order))
    }, [dispatch])
    const setType = useCallback((type: QueryType) => {
        dispatch(getQueryTypeAction(type))
    }, [dispatch])
    const setBoost = useCallback((boost: QueryBoost) => {
        dispatch(getQueryBoostAction(boost))
    }, [dispatch])
    const setTag = useCallback((tag: QueryTag) => {
        dispatch(getQueryTagAction(tag))
    }, [dispatch])

    return {
        query,
        setLimit,
        setOffset,
        setOrder,
        setType,
        setBoost,
        setTag
    }
}