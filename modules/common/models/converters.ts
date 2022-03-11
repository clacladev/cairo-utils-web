import { BN } from 'bn.js'
import { toBN } from '../../thirdParty/models/utils.dontpanicdao'

const FELT_MAX_VAL = new BN('3618502788666131106986593281521497120414687020801267626233049500247285301248', 10)
// const UINT256_MAX_VAL_HIGH = new BN('340282366920938463463374607431768211456', 10)

export interface ConvertOutput<T> {
  output: T
  isValid: boolean | null
}

function shortStringToFelt(input: string): ConvertOutput<BN | null> {
  const value = toBN(input)
  return {
    output: value ? value : null,
    isValid: value ? value.lt(FELT_MAX_VAL) : null
  }
}

export {
  shortStringToFelt,
}
