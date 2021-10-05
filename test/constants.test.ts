import { INIT_CODE_HASH } from '../src/constants'

//TODO change this to check against the factory contract INIT_CODE_PAIR_HASH
//expect(COMPUTED_INIT_CODE_HASH).toEqual(await this.factory.INIT_CODE_PAIR_HASH)
// reference issue https://ethereum.stackexchange.com/questions/88075/uniswap-addliquidity-function-transaction-revert
const COMPUTED_INIT_CODE_HASH = "0x2b3916d184be5391113dc61053ef6e55b1214905619aa198de8ef903f9acffd2"

describe('constants', () => {
  describe('INIT_CODE_HASH', () => {
    it('matches computed bytecode hash', () => {
      expect(COMPUTED_INIT_CODE_HASH).toEqual(INIT_CODE_HASH)
    })
  })
})
