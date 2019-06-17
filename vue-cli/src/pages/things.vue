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
    </div>
  </div>
</template>
<script>
import axios from "axios";
import GoogleMapsLoader from "google-maps";

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