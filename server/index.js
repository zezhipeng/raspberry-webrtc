import Koa from 'koa'
import Nuxt from 'nuxt'
import Router from 'koa-router'
import raspivid from 'raspivid-stream'
import { resolve } from 'path'
// import shelljs from 'shelljs'
import serve from 'koa-static'
import gpio from 'gpio'
import R from 'ramda'
import koaBody from 'koa-body'

const app = new Koa()
const router = new Router()
const env = process.env.NODE_ENV || 'development'
const host = env === 'production'
  ? '192.168.1.111'
  : '127.0.0.1'

const port = process.env.PORT || 3000

async function start () {
  let config = require('../nuxt.config.js')
  config.dev = !(env === 'production')
  const nuxt = await new Nuxt(config)

  if (env !== 'production') {
    try {
      await nuxt.build()
    } catch (e) {
      console.error(e) // eslint-disable-line no-console
      process.exit(1)
    }
  }

  app.use(serve(resolve(__dirname, '../public')))
  app.use(koaBody())

  router.get('/test', async ctx => {
    ctx.body = 'test'
  })

  router.get('/gpio', async ctx => {
    // const type = R.type(pins)
    let pins = ctx.query.pins
    console.log(pins)
    pins = JSON.parse(pins)
    console.log(pins)
    const gpioPins = R.map(item => gpio.export(Number(item.id), {
      direction: item.direction,
      interval: 200,
      ready () {
        console.log(this.value)
        console.log(item.id, 'is ready')
      }
    }))

    const gpios = gpioPins(pins)

    pins.forEach((item, i) => {
      console.log(item)
      console.log(gpios[i])
      gpios[i].set()
    })

    ctx.body = 'done'
  })

  app
    .use(router.routes())
    .use(router.middleware())

  app.use(async (ctx, next) => {
    ctx.status = 200
    await nuxt.render(ctx.req, ctx.res)
  })

  const server = app.listen(port, host)
  const io = require('socket.io')(server)
  // const WebStreamerServer = require('./raspivid')
  // const silence = new WebStreamerServer(server)
  // console.log('silence', silence)
  io.on('connection', socket => {
    console.log('new connection')
    socket.on('msg', data => {
      console.log('Message from peer: %s', data)
    })

    socket.on('stream', () => {
      var stream = raspivid()
      stream.on('data', data => {
        io.emit('stream', data)
      })
    })
  })
  console.log(`Server listening on ${host}:${port}`)
}

start()
