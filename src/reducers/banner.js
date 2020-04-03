import { defaultState } from 'reducers';

const banner = (state = defaultState.banner, action) => {
  switch (action.type) {
    case 'COMPLETE_BANNER':
      return false
    default:
      return state
  }
}

export default banner;