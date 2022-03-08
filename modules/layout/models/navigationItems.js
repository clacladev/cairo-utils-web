import { index } from '../../common/models/routes'

const items = [
  { name: 'Home', href: index() },
]

export const NAVIGATION_ITEMS = items.map((item) => {
  item.isCurrent = false
  return item
})
