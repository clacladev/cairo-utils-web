import Header from './Header'
import ShortStringFeltToString from '../../forms/components/ShortStringFeltToString'
import StringToShortStringFelt from '../../forms/components/StringToShortStringFelt'
import StringToFeltArray from '../../forms/components/StringToFeltArray'

export default function Index() {
  return (
    <>
      <Header />
      <StringToShortStringFelt isSeparatorVisible={true} />
      <ShortStringFeltToString isSeparatorVisible={true} />
      <StringToFeltArray />
    </>
  )
}
