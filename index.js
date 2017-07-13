var raspivid = require('raspivid')
var fs = require('fs')
var {resolve} = require('path')

var file = fs.createWriteStream(resolve(__dirname, '/video.h264'))
var video = raspivid()
console.log('test')
video.pipe(file)
