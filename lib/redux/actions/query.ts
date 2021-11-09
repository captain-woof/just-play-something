import { ActionTypes } from "../constants"
import { QueryLimit, QueryOrder, QueryType, QueryBoost, QueryTag, QueryOffset } from '../../../types/query'

export type QueryAction = {
    type: number
    payload: QueryLimit | QueryOffset | QueryOrder | QueryType | QueryBoost | QueryTag
}

export const getQueryLimitAction = (limit: QueryLimit) => ({ type: ActionTypes.SET_QUERY_LIMIT, payload: limit })
export const getQueryOffsetAction = (offset: QueryOffset) => ({ type: ActionTypes.SET_QUERY_OFFSET, payload: offset })
export const getQueryOrderAction = (order: QueryOrder) => ({ type: ActionTypes.SET_QUERY_ORDER, payload: order })
export const getQueryTypeAction = (type: QueryType) => ({ type: ActionTypes.SET_QUERY_TYPE, payload: type })
export const getQueryBoostAction = (boost: QueryBoost) => ({ type: ActionTypes.SET_QUERY_BOOST, payload: boost })
export const getQueryTagAction = (tag: QueryTag) => ({ type: ActionTypes.SET_QUERY_TAG, payload: tag })