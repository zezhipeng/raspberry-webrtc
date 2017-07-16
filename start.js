require('babel-core/register')({
  'presets': [
    'stage-3',
    'latest'
  ],
  'plugins': [
    'transform-decorators-legacy'
  ]
})

require('babel-polyfill')
require('./server')
