import Header from './Header'
import ShortStringFeltToString from './ShortStringFeltToString'
import StringToShortStringFelt from './StringToShortStringFelt'

export default function Index() {
  return (
    <>
      <Header />
      <StringToShortStringFelt isSeparatorVisible={true} />
      <ShortStringFeltToString />
    </>
  )
}
