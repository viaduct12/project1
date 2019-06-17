<template>
  <div id="things">

  <h1>{{info}}</h1>
    
  </div>
</template>
<script>

import axios from 'axios'
import VueAxios from 'vue-axios'

export default{
  name: "things",
  data () {
    return {
      videoId : [],
      info: "not working help"
    }
  },
  mounted (){

    axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
      part: "snippet, id",
      q: "travel guide madrid",
      key: "AIzaSyBGnNxm3xCX-HWVQrxhPk-dfEiZAOx_FVQ"
    }
  })
  .then(response => {
      
      var results = response;
      console.log(results);
      
        for (var i = 0; i < 4; i++) {      
          this.videoId.push("https://www.youtube.com/watch?v=" + results.data.items[i].id.videoId);

        }
    })
  }
}
</script>
<style>

</style>

