import { combineReducers } from 'redux'
import uiReducer from './uiReducer'
import entityReducer from './entityReducer'
export default combineReducers({
    ui: uiReducer,
    entities: entityReducer
})