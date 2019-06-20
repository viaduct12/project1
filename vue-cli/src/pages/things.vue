
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
    <div class="row">
      <div class="column">
        <youtube :video-id="videoId1"></youtube>
      </div>

      <!-- div space left and right videos apart -->
      <div class="column" id=" space-LR-videos"></div>

      <div class="column">
        <youtube :video-id="videoId2"></youtube>
      </div>
      
    </div>

  <div id="space-videos"></div>


    <div class="row">
      <div class="column">
        <youtube :video-id="videoId3"></youtube>
      </div>

      <!-- div space left and right videos apart -->
      <div class="column" id=" space-LR-videos"></div>

<<<<<<< HEAD

  <h4>Videos on: </h4>
    <youtube :video-id="videoId"></youtube>
    

=======
      <div class="column">
        <youtube :video-id="videoId4"></youtube>
      </div>
    </div>
>>>>>>> 392706a06633021d4da67781ea964da1c34117c3
  </div>
</template>

<script>

import axios from "axios";
import GoogleMapsLoader from "google-maps";

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueYouTubeEmbed from 'vue-youtube-embed'

Vue.use(VueYouTubeEmbed);

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
  data() {
    return {
<<<<<<< HEAD
      videoIds : [],
      videoId:'videoId',
      info: "",
=======
      videoIds: [],
      videoId1: "videoId",
      videoId2: "",
      vvideoId3: "",
      videoId4: "",
      info: "Suggested Videos to Assist Your Travels",
>>>>>>> 392706a06633021d4da67781ea964da1c34117c3
      queryCountry: this.$store.getters.city //this.city
    };
  },
  mounted() {
    console.log(this.queryCountry, "my cityyyyyy!");
    axios
      .get("https://www.googleapis.com/youtube/v3/search", {
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

        this.videoId1 = this.videoIds[0];
        this.videoId2 = this.videoIds[1];
        this.videoId3 = this.videoIds[2];
        this.videoId4 = this.videoIds[3];
      });
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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

<<<<<<< HEAD
h1, h2, h4{
=======
h1,
h2 {
>>>>>>> 392706a06633021d4da67781ea964da1c34117c3
  font-weight: normal;
}

h4 {
  font-size: 34px;
  color: #5eabe3;
  margin: 20px;
  
}

<<<<<<< HEAD
=======
li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

// #video-container 
//   height: 400px;
//   width: 400px;
// 

* {
  box-sizing: border-box;
}

.column {
  float: left;
  width: 33.33%;
  padding: 5px;
}

/* Clearfix (clear floats) */
.row::after {
  content: "";
  clear: both;
  display: table;
}

#space-videos {
  width: 10px;
  height: 50%;
}

#space-LR-videos {
  width: 1px;

}


>>>>>>> 392706a06633021d4da67781ea964da1c34117c3
</style>
