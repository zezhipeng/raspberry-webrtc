import Koa from 'koa'
import Nuxt from 'nuxt'
import Router from 'koa-router'
import raspivid from 'raspivid-stream'
import { resolve } from 'path'
// import shelljs from 'shelljs'
import serve from 'koa-static'

const app = new Koa()
const router = new Router()
const env = process.env.NODE_ENV || 'development'
const host = env === 'production'
  ? '192.168.1.111'
  : '127.0.0.1'

console.log(env, host)

const port = process.env.PORT || 3000

async function start () {
  let config = require('../nuxt.config.js')
  config.dev = !(env === 'production')
  const nuxt = await new Nuxt(config)

  if (config.dev) {
    try {
      await nuxt.build()
    } catch (e) {
      console.error(e) // eslint-disable-line no-console
      process.exit(1)
    }
  }

  app.use(serve(resolve(__dirname, '../public')))

  router.get('/test', async ctx => {
    ctx.body = 'test'
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
