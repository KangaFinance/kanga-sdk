export enum TroopAction {
  ADD_ASSET = 1,
  REPAY = 2,
  REMOVE_ASSET = 3,
  REMOVE_COLLATERAL = 4,
  BORROW = 5,
  GET_REPAY_SHARE = 6,
  GET_REPAY_PART = 7,
  ACCRUE = 8,

  // Functions that don't need accrue to be called
  ADD_COLLATERAL = 10,
  UPDATE_EXCHANGE_RATE = 11,

  // Function on KangaMob
  MOB_DEPOSIT = 20,
  MOB_WITHDRAW = 21,
  MOB_TRANSFER = 22,
  MOB_TRANSFER_MULTIPLE = 23,
  MOB_SETAPPROVAL = 24,

  // Any external call (except to KangaMob)
  CALL = 30
}
