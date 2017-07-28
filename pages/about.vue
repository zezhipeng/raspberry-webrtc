<template lang="pug">
.container
  button(@click='left') left
  button(@click='right') right
</template>
<script>
import axios from 'axios'
import cl

export default {
  data () {
    return ({
      pw: 0
    })
  },
  methods: {
    async getPw () {
      let {data} = await axios.get('/pw')
      console.log(data)
      this.pw = data
    },
    async left (

    )
  }
}
</script>

<style scoped>
.title
{
  margin-top: 50px;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 10px;
}
.button
{
  margin-top: 50px;
}
</style>
