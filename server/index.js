import Koa from 'koa'
import Nuxt from 'nuxt'
import Router from 'koa-router'
import raspivid from 'raspivid'
import { createWriteStream } from 'fs'
import { resolve } from 'path'

const app = new Koa()
const router = new Router()
const host = process.env.HOST || '192.168.1.111'
const port = process.env.PORT || 3000

async function start () {
  let config = require('../nuxt.config.js')
  config.dev = !(app.env === 'production')
  const nuxt = await new Nuxt(config)

  if (config.dev) {
    try {
      await nuxt.build()
    } catch (e) {
      console.error(e) // eslint-disable-line no-console
      process.exit(1)
    }
  }

  router.get('/stream', async ctx => {
    var file = createWriteStream(resolve(__dirname, '/video.mp4'))
    var video = raspivid()
    ctx.body = video.pipe(file)
  })

  app
    .use(router.routes())
    .use(router.middleware())

  app.use(async (ctx, next) => {
    ctx.status = 200
    await nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  console.log(`Server listening on ${host}:${port}`)
}

start()
