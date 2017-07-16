'use strict'

import util from 'util'
import { spawn } from 'child_process'
import merge from 'mout/object/merge'
import Server from './_server'

export default class RpiServer extends Server {
  constructor (server, opts = {}) {
    super(server, merge({
      fps: 12
    }, opts))
  }

  getFeed () {
    var msk = 'raspivid -t 0 -o - -w %d -h %d -fps %d'
    var cmd = util.format(msk, this.options.width, this.options.height, this.options.fps)
    console.log(cmd)
    var streamer = spawn('raspivid', ['-t', '0', '-o', '-', '-w', this.options.width, '-h', this.options.height, '-fps', this.options.fps, '-pf', 'baseline'])
    streamer.on('exit', code => {
      console.log('Failure', code)
    })

    return streamer.stdout
  }
}
