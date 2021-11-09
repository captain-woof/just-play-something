import { createStore } from 'redux'
import reducer from './reducers'

const store = createStore(reducer)

export default store

export type RootState = ReturnType<typeof store.getState>