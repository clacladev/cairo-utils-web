import { index } from '../../common/models/routes'

const items = [
  { name: 'Home', href: index(), isCurrent: false },
]

export const NAVIGATION_ITEMS = items.map((item) => {
  item.isCurrent = false
  return item
})
