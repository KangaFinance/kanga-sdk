import { BigNumber } from '@ethersproject/bignumber'
import { Zero } from '@ethersproject/constants'

export function toAmount(token, shares: BigNumber): BigNumber {
  return BigNumber.from(token.mobShare).gt(0) ? shares.mul(token.mobAmount).div(token.mobShare) : Zero
}

export function toShare(token, amount: BigNumber): BigNumber {
  return BigNumber.from(token.mobAmount).gt(0) ? amount.mul(token.mobShare).div(token.mobAmount) : Zero
}
