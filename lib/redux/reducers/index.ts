import { combineReducers } from 'redux'
import { currentTrackReducer } from './currentTrackReducer'
import { loadedTracksReducer } from './loadedTracksReducer'
import { progressPendingReducer } from './progressPending'
import { queryReducer } from './queryReducer'

const reducer = combineReducers({
    currentTrack: currentTrackReducer,
    loadedTracks: loadedTracksReducer,
    query: queryReducer,
    pendingProgress: progressPendingReducer
})

export default reducer