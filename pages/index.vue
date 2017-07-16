<template lang='pug'>
section.container
  h1.title
    | Universal Vue.js Application Framework
  h2(@click='client') client
  button(type='button', onclick='wsavc.playStream()') Start Video
  button(type='button', onclick='wsavc.stopStream()') Stop Video
  button(type='button', onclick='wsavc.disconnect()') Disconnect
  video(controls, autoplay)
    source(src='', type='')
</template>

<script>
import io from 'socket.io-client'
import player from 'h264-live-player'

export default {
  data () {
    return ({
        socket: null,
        wsavc: {}
    })
  },
  mounted () {
    // const socket = io('http://192.168.1.111:3000')
    // socket.on('stream', data => {
    //   console.log(data)
    // })

    // var wsavc = new WSAvcPlayer(canvas, 'webgl')
    // wsavc.connect('http://192.168.1.111:3000')
    // this.socket = socket
    const canvas = document.createElement('canvas')
    const parent = document.querySelector('#container')
    parent.appendChild(canvas)
    const uri = 'ws://192.168.1.111:3000'
    const wsavc = new WSAvcPlayer(canvas, 'webgl', 1, 35)
    wsavc.connect(uri)
    this.wsavc = wsavc
  },
  methods: {
    client () {
      // this.socket.emit('stream')
    }
  }
}
</script>

<style scoped>
.title
{
  margin: 50px 0;
}
</style>
