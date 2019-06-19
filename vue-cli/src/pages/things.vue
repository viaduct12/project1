
<template>
  <div id="app">
    {{info}}

    <!-- <div v-for="index in videoIds">     -->
    <youtube :video-id="videoId"></youtube>
    <!-- <youtube :video-id="videoId"></youtube> -->
    <!-- <youtube :video-id="videoId"></youtube> -->
    <!-- <youtube :video-id="videoId"></youtube> -->
    <!-- </div> -->
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueYouTubeEmbed from 'vue-youtube-embed'
import prices from "./prices"


Vue.use(VueYouTubeEmbed)

export default{
  name: "app",
  components: {
    prices
  },
  data () {
    return {
      videoIds : [],
      videoId:'videoId',
      info: "not working help",
      queryCountry: "madrid" //this.city
    }
  },
  mounted (){
    console.log(this.queryCountry, "my cityyyyyy!");
    axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
      part: "snippet, id",
      q: "travel guide " + this.queryCountry,
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

        this.videoId = this.videoIds[0];      
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
