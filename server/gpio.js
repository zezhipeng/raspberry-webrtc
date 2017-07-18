var gpio = require('node-gpio')
var PWM = gpio.PWM
var pin = new PWM('11')

pin.open()
pin.setMode(gpio.OUT)
pin.frequency = 50

var sleep = time => new Promise(resolve => setTimeout(resolve, time))

let dc = 20

pin.dutyCycle = dc
pin.start()

const todo = async () => {
  for (let i = 20; i > 0; --i) {
    pin.dutyCycle = i
    await sleep(1000)
  }
}

todo()
