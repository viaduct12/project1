<template>
  <div id="prices">

  <h1>{{msg}}</h1>



    
  </div>
</template>
<script>
  import axios from 'axios'
  import VueAxios from 'vue-axios'

export default {
   name: 'prices',
  data (){
    return {

      msg: "Prices Page"
    }
  },
  mounted () {
    
  }
}
</script>
<style>

</style>

