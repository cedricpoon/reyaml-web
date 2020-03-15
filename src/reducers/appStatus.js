import { appStatus } from 'actions/enum'

const currentAppStatus = (state = appStatus.NORMAL, action) => {
  switch (action.type) {
    case 'SET_APP_LOADING_STATUS':
      return action.status
    default:
      return state
  }
}

export default currentAppStatus;