
<template>
  <div class="hello">
    <h1>{{msg}}</h1>

    <div class="google-map" :id="mapName">
      <GmapMap
        :center="{lat:40.7127753, lng:-74.0059728}"
        :zoom="7"
        map-type-id="terrain"
        style="width: 500px; height: 300px"
      >
        <GmapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center=m.position"
        />
      </GmapMap>

  <div id="app">
    {{info}}
    <youtube :video-id="videoId"></youtube>
  </div>
</template>

<script>
import axios from "axios";
import GoogleMapsLoader from "google-maps";

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueYouTubeEmbed from 'vue-youtube-embed'

Vue.use(VueYouTubeEmbed)

export default {
  name: "google-map",
  props: ["name"],
  data: function() {
    return {
      mapName: this.name + "-map"
    };
  },
  mounted: function() {
    const element = document.getElementById(this.mapName);
    const options = {
      zoom: 14,
      center: new google.maps.LatLng(40.7127753, -74.0059728)
    };
    const map = new google.maps.Map(element, options);

export default{
  name: "app",
  data () {
    return {
      videoIds : [],
      videoId:'videoId',
      info: "not working help",
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
};
</script>
<style scoped>
.google-map {
  width: 475px;
  height: 275px;
  margin: 0 auto;
  margin-right: 10px;
  background: gray;
  border-radius: 25px;
}
</style>

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