import { defaultState } from 'reducers';

const currentAppStatus = (state = defaultState.appStatus, action) => {
  switch (action.type) {
    case 'SET_APP_STATUS':
      return action.status
    default:
      return state
  }
}

export default currentAppStatus;