import { Query, QueryOffset, QueryLimit, QueryOrder, QueryType, QueryBoost, QueryTag } from "../../../types/query";
import { getDefaultQuery } from "../../../utils/query";
import { QueryAction } from "../actions/query";
import { ActionTypes } from "../constants";

export const queryReducer = (query: Query = getDefaultQuery(), action: QueryAction): Query => {
    switch (action.type) {
        case ActionTypes.SET_QUERY_LIMIT:
            return { ...query, limit: action.payload as QueryLimit }
        case ActionTypes.SET_QUERY_OFFSET:
            return { ...query, offset: action.payload as QueryOffset }
        case ActionTypes.SET_QUERY_ORDER:
            return { ...query, order: action.payload as QueryOrder }
        case ActionTypes.SET_QUERY_TYPE:
            return { ...query, type: action.payload as QueryType }
        case ActionTypes.SET_QUERY_BOOST:
            return { ...query, boost: action.payload as QueryBoost }
        case ActionTypes.SET_QUERY_TAG:
            return { ...query, tags: action.payload as QueryTag }
        default:
            return query
    }
}