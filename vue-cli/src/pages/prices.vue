<template>
  <div id="prices">

<h1>{{msg}}</h1>



    
  </div>
</template>
<script>
  import axios from 'axios'
  import VueAxios from 'vue-axios'

export default {
   name: 'prices',
  data () {
    return {
      msg: "Prices Page"
    }
  },

  

  mounted() {
    fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/v1.0", {
      mode: 'cors',
      method: "POST",
      headers: {
        'cache-control': 'private',
        "X-RapidAPI-Host":"skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
        'X-RapidAPI-Key':"ec7228ea2fmsh9b2bb9e23723a32p1f2123jsnb1ea8ec75a54",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: {
        "cabinClass": "business",
        "country": "US",
        "currency": "USD",
        "locale": "en-US",
        "originPlace": "SFO-sky",
        "destinationPlace": "LHR-sky",
        "inboundDate": "2019-09-10",
        "outboundDate": "2019-09-01",
        "infants": "0",
        "children": "0",
        "adults": "1"
      }
    })
    // .then(json)
    .then(function(data, type, stuff){
      console.log(data, type, stuff);
      // console.log(data.getResponseHeader("Location"));
    });

    // axios({
    //   method: "POST",
    //   url: "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/v1.0", 
    //   data: {
    //       cabinClass: "business",
    //       country: "US",
    //       currency: "USD",
    //       locale: "en-US",
    //       originPlace: "SEA-sky",
    //       destinationPlace: "LAX-sky",
    //       inboundDate: "2019-09-10",
    //       outboundDate: "2019-09-01",
    //       infants: "0",
    //       children: "0",
    //       adults: "1"
    //     }, 
    //   headers: {
    //     'cache-control': 'private',
    //     'X-RapidAPI-Host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
    //     "X-RapidAPI-Key": "ec7228ea2fmsh9b2bb9e23723a32p1f2123jsnb1ea8ec75a54",
    //     "Content-Type": "application/x-www-form-urlencoded"
    //     },
    //   withCredentials: true,
    //   })
    //   .then(function(response, error, cool){
    //     console.log(response, error, cool);
    //   });
    // }
  }

}
</script>
<style>

</style>

