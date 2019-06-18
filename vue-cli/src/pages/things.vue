
<template>
  <div id="app">
    {{info}}
    
    <youtube :video-id="videoId"></youtube>

  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueYouTubeEmbed from 'vue-youtube-embed'

Vue.use(VueYouTubeEmbed)

export default{
  name: "app",
  data () {
    return {
      videoIds : [],
      videoId:'videoId',
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
          // this.videoIds.push("https://www.youtube.com/watch?v=" + results.data.items[i].id.videoId);
          this.videoIds.push(results.data.items[i].id.videoId);
        }

        this.videoId = this.videoIds.pop();      
    })
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
