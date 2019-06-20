
<template>
  <div id="app">
    {{info}}


  <h4>Videos on: </h4>
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
      info: "",
      queryCountry: this.$store.getters.city //this.city
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

h1, h2, h4{
  font-weight: normal;
}

h4 {
  font-size: 34px;
  color: #5eabe3;
  margin: 20px;
  
}

</style>
