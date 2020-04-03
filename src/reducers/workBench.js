import { defaultState } from 'reducers';

const workBench = (state = defaultState.workBench, action) => {
  switch (action.type) {
    case 'SET_WORKBENCH':
      return { ...state, ...action.workBench }
    case 'RESET_WORKBENCH':
      return defaultState.workBench
    default:
      return state
  }
}

export default workBench;