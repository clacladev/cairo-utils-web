import Header from './Header'
import FeltToShortString from './FeltToShortString'
import ShortStringToFelt from './ShortStringToFelt'
import StringToFeltArray from './StringToFeltArray'
import FeltArrayToString from './FeltArrayToString'
import DecimalToFelt from './DecimalToFelt'

export default function Index() {
  return (
    <>
      <Header />
      <DecimalToFelt />
      <ShortStringToFelt />
      <FeltToShortString />
      <StringToFeltArray />
      <FeltArrayToString isSeparatorVisible={false} />
    </>
  )
}
