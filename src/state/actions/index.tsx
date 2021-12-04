interface DepositAcition {
  type: "deposit"
  payload: number
}
interface WithdrawAction {
  type: "withdraw"
  payload: number
}
interface BankruptAction {
  type: "bankrupt"
}

export type Action = DepositAcition | WithdrawAction | BankruptAction
