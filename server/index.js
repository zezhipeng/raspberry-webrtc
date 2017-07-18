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
import piblaster from 'pi-blaster.js'

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
    let pins = ctx.query.pins
    pins = JSON.parse(pins)

    R.forEach(item => {
      let pin = gpio.export(Number(item.id), {
        direction: item.direction,
        ready () {
          setInterval(() => {
            pin.set(item.set)
            setTimeout(() => {
              pin.reset()
            }, 14)
          }, 28)
        }
      })
    })(pins)

    ctx.body = 'done'
  })

  router.get('/pwm', async ctx => {
    let pin = ctx.query.pin
    let clk = ctx.query.clk

    pin = Number(pin)
    clk = Number(clk)

    // console.log(pin, clk)
    // try {
    //   let g = gpio.export(pin, {
    //     direction: 'out',
    //     ready () {
    //       setInterval(() => {
    //         g.set()
    //         setTimeout(() => {
    //           g.reset()
    //         }, 0.5 / clk)
    //       }, 1 / clk)
    //     }
    //   })
    // } catch (e) {
    //   console.log(e)
    // }

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
