import { defaultState } from 'reducers';

const context = (state = defaultState.context, action) => {
  switch (action.type) {
    case 'SET_CONTEXT_D3OBJECT':
      return { ...state, d3Object: action.d3Object }
    case 'SET_CONTEXT_YAML':
      return { ...state, yaml: action.yaml }
    case 'SET_CONTEXT_ROW':
      return { ...state, row: action.row }
    case 'RESET_CONTEXT':
      return { ...state, ...defaultState.context }
    default:
      return state
  }
}

export default context;