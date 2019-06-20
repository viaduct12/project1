<template>
  <div id="container">
    <div id="prices-container">
      <h1>{{msg}}</h1>
      <h1>{{priceDisplay}}</h1>
    </div>

    <!-- spacer div -->
    <div id="spacer"></div>

    <!-- google map -->
    <div class="google-map" :id="mapName">
      <GmapMap
        :center="{lat:40.7127753, lng:-74.0059728}"
        :zoom="7"
        map-type-id="terrain"
        style="width: 500px; height: 300px"
      ></GmapMap>
    </div>
  <!-- google map -->

  </div>
</template>
<script>
import axios from "axios";
import VueAxios from "vue-axios";
//importing google-map
import GoogleMapsLoader from "google-maps";

export default {
  name: "prices",
  props: ["name"],
  data() {
    return {
      msg: "Prices Page",
      price: [],
      airline: [],
      carrierID: [],
      priceDisplay: "",
      origin: this.$store.getters.flightInfo.originCode, //user input "SEA"
      destination: this.$store.getters.flightInfo.destinationCode, //user input LAX
      departing: this.$store.getters.flightInfo.dateCode, //user input 2019-09-01
      // return: "2019-09-15", //user input
      city: "",
      mapName: this.name + "-map"
    };
  },


  mounted() {
    getMap();
    // google map 
    function getMap(){

    
    const element = document.getElementById(this.mapName);
    const options = {
      zoom: 14,
      center: new google.maps.LatLng(40.7127753, -74.0059728)
    };
    const map = new google.maps.Map(element, options);
    };
    //google map 

    axios({
      method: "GET",
      url:
        "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/" +
        this.origin +
        "-sky/" +
        this.destination +
        "-sky/" +
        this.departing,
      headers: {
        "X-RapidAPI-Host":
          "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
        "X-RapidAPI-Key": "ec7228ea2fmsh9b2bb9e23723a32p1f2123jsnb1ea8ec75a54"
      }
      //  params: {
      //   inboundPartialDate: this.return
      //  }
    }).then(response => {
      console.log(response);

      this.city = response.data.Places[0].CityName;
      this.$store.commit({
        type: "changeCity",

        newCity: this.city
      });

      for (var i = 0; i < response.data.Quotes.length; i++) {
        this.carrierID.push(response.data.Quotes[i].OutboundLeg.CarrierIds[0]);
        this.price.push(response.data.Quotes[i].MinPrice);
      }

      // console.log(this.carrierID.length);
      for (var j = response.data.Carriers.length - 1; j >= 0; j--) {
        for (var k = 0; k < this.carrierID.length; k++) {
          if (this.carrierID[k] === response.data.Carriers[j].CarrierId) {
            this.airline.push(response.data.Carriers[j].Name);
          }
        }
      }
      //displays prices + airlines
      for (var i = 0; i < this.price.length; i++) {
        this.priceDisplay = "$" + this.price[i] + " " + this.airline[i];
        console.log(this.priceDisplay, "whaaaat?!");
      }
    });
  }
};
</script>
<style scoped>
/* google map */
.google-map {
  width: 475px;
  height: 275px;
  margin: 0 auto;
  margin-right: 10px;
  background: gray;
  border-radius: 25px;
}
/* google map */
</style>

