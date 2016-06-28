# lodash-sorted-pairs

Get sorted pairs (key, value) from an object using lodash.

```js
import sortedPairs from 'lodash-sorted-pairs'

const object = { b: 1, a: 2 }

// Sort by key:
sortedPairs(object)
// -> [ ['a', 2], ['b', 1] ]

// Or pass a sorted on pairs from `_.toPairs`:
sortedPairs(object, _.property('1'))
// -> [ ['b', 1], ['a', 2] ]
```

