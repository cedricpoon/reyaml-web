import { defaultState } from 'reducers';

const version = (state = defaultState.version, action) => {
  switch (action.type) {
    case 'SET_VERSION':
      return action.version
    default:
      return state
  }
}

export default version;