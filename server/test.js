var R = require('ramda')

let data = ['1.2.3', '3.3.3']
const fn = R.map(R.split('.'))
data = fn(data)
console.log(data)
