import { Query } from "../types/query"

export const getDefaultQuery = (offset?: number): Query => ({
    client_id: process.env.NEXT_PUBLIC_JAMENDO_CLIENT_API as string,
    featured: 1,
    limit: 8,
    offset: offset || 0,
    format: 'json',
    order: "popularity_week",
    type: 'single+albumtrack',
    imagesize: 400,
    audioformat: 'mp32',
    boost: 'listens_week',
    include: 'licenses',
    tags: null
})

export const getQueryString = (query: Query): string => {
    let queryString = `client_id=${query.client_id}&featured=${query.featured}&limit=${query.limit}&format=${query.format}&order=${query.order}&type=${query.type}&imagesize=${query.imagesize}&audioformat=${query.audioformat}&boost=${query.boost}&include=${query.include}&offset=${query.offset}`

    if (!!query.tags) {
        queryString += `&tags=${query.tags}`
    }

    return queryString
}

export const getFetchUrl = (query: Query) => `https://api.jamendo.com/v3.0/tracks?${getQueryString(query)}`