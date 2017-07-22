import { writeFile } from 'fs'

const SYS_PATH = '/sys/class/gpio/gpio'

export const open = (pinNumber, direction) => new Promise((resolve, reject) => {
  const path = `${SYS_PATH}${pinNumber}/direction`
  console.log('open ', path)
  writeFile(path, direction, 'utf8', (err, res) => {
    if (err) reject(err)
    resolve(res)
  })
})

export const write = (pinNumber, value) => new Promise((resolve, reject) => {
  const path = `${SYS_PATH}${pinNumber}/value`
  console.log('write ', path)
  writeFile(path, value, 'utf8', (err, res) => {
    if (err) reject(err)
    resolve(res)
  })
})
