import Header from './Header'
import FeltToShortString from './FeltToShortString'
import ShortStringToFelt from './ShortStringToFelt'
import StringToFeltArray from './StringToFeltArray'
import FeltArrayToString from './FeltArrayToString'

export default function Index() {
  return (
    <>
      <Header />
      <ShortStringToFelt />
      <FeltToShortString />
      <StringToFeltArray />
      <FeltArrayToString isSeparatorVisible={false} />
    </>
  )
}
