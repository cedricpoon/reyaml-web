import { defaultState } from 'reducers';

const currentLint = (state = defaultState.lint, action) => {
  switch (action.type) {
    case 'SET_LINT':
      return action.status
    default:
      return state
  }
}

export default currentLint;