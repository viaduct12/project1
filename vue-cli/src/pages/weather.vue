<template>
  <div id="weather">

<h1>{{msg}}</h1>



    
  </div>
</template>
<script>
  import axios from 'axios'


export default {
   name: 'weather',
  data (){
    return {

      msg: "weather Page"
    }
  }
}
</script>
<style>

</style>

