import { combineReducers } from 'redux'
import appStatus from './appStatus'
import lint from './lint'

export default combineReducers({
  appStatus,
  lint
})