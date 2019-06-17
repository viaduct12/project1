<template>
  <div id="things">

<h1>{{info}}</h1>



    
  </div>
</template>
<script>

import axios from 'axios'
import VueAxios from 'vue-axios'
export default{
  name: "app",
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
      // console.log("hello");
      var results = response;
      console.log(results);
      
        // console.log("argh");
        for (var i = 0; i < 4; i++) {
          // console.log(i, "wtf man");
          this.videoId.push("https://www.youtube.com/watch?v=" + results.data.items[i].id.videoId);
          // console.log(videoId);
        }
    })
  }
}
</script>
<style>

</style>

