import _ from 'lodash'

export default function sortedPairs (object, sorter) {
  sorter = sorter || _.property('0')
  return _(object).toPairs().sortBy(sorter).value()
}

