
<template>
  <div id="app">
    {{info}}
    <!-- <div id="video-Container"> -->
      <!-- <div v-for="index in videoIds">     -->
      <!-- <youtube :video-id="videoId1"></youtube>
      <youtube :video-id="videoId2"></youtube>
      <youtube :video-id="videoId3"></youtube>
      <youtube :video-id="videoId4"></youtube> -->
      <!-- <youtube :video-id="videoId"></youtube> -->
      <!-- <youtube :video-id="videoId"></youtube> -->
      <!-- <youtube :video-id="videoId"></youtube> -->
      <!-- </div> -->
    <!-- </div> -->

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

      <div class="column">
        <youtube :video-id="videoId4"></youtube>
      </div>
    </div>

    
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import VueYouTubeEmbed from "vue-youtube-embed";

Vue.use(VueYouTubeEmbed);

export default {
  name: "app",
  data() {
    return {
      videoIds: [],
      videoId1: "videoId",
      videoId2: "",
      vvideoId3: "",
      videoId4: "",
      info: "Suggested Videos to Assist Your Travels",
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

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
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


</style>
