import Header from './Header'
import FeltToShortString from './FeltToShortString'
import ShortStringToFelt from './ShortStringToFelt'
import StringToFeltArray from './StringToFeltArray'

export default function Index() {
  return (
    <>
      <Header />
      <ShortStringToFelt />
      <FeltToShortString />
      <StringToFeltArray isSeparatorVisible={false} />
    </>
  )
}
