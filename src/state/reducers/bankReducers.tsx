import {Action} from "../actions"
import {ActionType} from "../action-types"

const initialState = 0

const reducer = (state: number = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.DESPOSIT:
      return state + action.payload
    case ActionType.WITHDRAW:
      if (state <= 2) {
        return 0
      } else {
        return state - action.payload
      }
    case ActionType.BANKRUPT:
      return 0
    default:
      return state
  }
}

export default reducer
