import { createStore, combineReducers } from 'redux'
import profileReducer from './Reducers/ProfileReducer'
import repoReducer from './Reducers/RepoReducer'

const rootReducer= combineReducers({
    profileReducer, 
    repoReducer
})

const store = createStore (rootReducer)

export default store
