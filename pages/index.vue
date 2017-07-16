<template lang='pug'>
section.container
  h1.title
    | Universal Vue.js Application Framework
  h2(@click='client') client
  video(controls, autoplay)
    source(src='', type='')
</template>

<script>
import io from 'socket.io-client'

export default {
  data () {
    return ({
        socket: null
    })
  },
  mounted () {
    const socket = io('http://192.168.1.111:3000')
    socket.on('stream', data => {
      console.log(data)
    })

    this.socket = socket
  },
  methods: {
    client () {
      this.socket.emit('stream')
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
