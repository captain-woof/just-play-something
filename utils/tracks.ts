import { ITracks } from "../types/track";
import { getDefaultQuery, getFetchUrl } from "./query";

export const getPreloadedTracks = async (): Promise<ITracks> => {
    // Fetch tracks from Jamendo
    const res = await fetch(getFetchUrl(getDefaultQuery()), { credentials: 'omit' })
    const res_json = await res.json()

    // Return results
    return (res_json.results as ITracks)
}