import { writeFile } from 'fs'

const SYS_PATH = '/sys/class/gpio'

const open = (pinNumber, direction) => new Promise((resolve, reject) => {
  const path = `${SYS_PATH}/direction`
  writeFile(path, direction, (err, res) => {
    if (err) reject(err)
    resolve(res)
  })
})

const write = (pinNumber, value) => new Promise((resolve, reject) => {
  const path = `${SYS_PATH}/value`
  value = !value
    ? '0'
    : '1'

  writeFile(path, value, (err, res) => {
    if (err) reject(err)
    resolve(res)
  })
})

export default {
  open,
  write
}
