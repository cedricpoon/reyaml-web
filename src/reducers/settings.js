import { defaultState } from 'reducers';

const settings = (state = defaultState.settings, action) => {
  switch (action.type) {
    case 'SET_DIAGRAM_SETTINGS':
      return { ...state, diagram: { ...state.diagram, ...action.diagram } }
    default:
      return state
  }
}

export default settings;