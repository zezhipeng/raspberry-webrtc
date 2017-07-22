import { writeFile } from 'fs'

const SYS_PATH = '/sys/class/gpio'

const open = (pinNumber, direction) => new Promise((resolve, reject) => {
  const path = `${SYS_PATH}${pinNumber}/direction`
  writeFile(path, direction, (err, res) => {
    if (err) reject(err)
    resolve(res)
  })
})

const write = (pinNumber, value) => new Promise((resolve, reject) => {
  const path = `${SYS_PATH}${pinNumber}/value`
  value = !value
    ? '0'
    : '1'

  writeFile(path, value, 'utf8', (err, res) => {
    if (err) reject(err)
    resolve(res)
  })
})

export default {
  open,
  write
}
