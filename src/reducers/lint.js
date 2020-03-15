import { lint } from 'actions/enum'

const currentLint = (state = lint.OK, action) => {
  switch (action.type) {
    case 'SET_LINT':
      return action.status
    default:
      return state
  }
}

export default currentLint;