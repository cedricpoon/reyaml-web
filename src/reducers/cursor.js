import { defaultState } from 'reducers';

const cursor = (state = defaultState.cursor, action) => {
  switch (action.type) {
    case 'UPDATE_CURSOR':
      return { ...state, index: action.index, goto: action.goto }
    default:
      return state
  }
}

export default cursor;