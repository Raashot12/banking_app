import { ActionType } from "../action-types"
import { Action } from "../actions"
import { Dispatch } from "redux"
export const depositMoney = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DESPOSIT,
      payload: amount,
    })
  }
}

export const withDrawMoney = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.WITHDRAW,
      payload: amount,
    })
  }
}

export const bankrupt = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.BANKRUPT
    })
  }
}