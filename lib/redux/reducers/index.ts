import { combineReducers } from 'redux'
import { currentTrackReducer } from './currentTrackReducer'
import { loadedTracksReducer } from './loadedTracksReducer'
import { queryReducer } from './queryReducer'

const reducer = combineReducers({
        currentTrack: currentTrackReducer,
        loadedTracks: loadedTracksReducer,
        query: queryReducer
    })

export default reducer