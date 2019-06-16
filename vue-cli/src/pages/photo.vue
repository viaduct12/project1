<template>
  <div id="photo">

    <h1>{{title}}</h1>

    <img v-bind:src="url" />


  </div>
</template>
<script>
  import axios from 'axios'


  export default {
    name: 'photo',
    data() {
      return {
        title: "Photo Page",
        info: null,
        listings: [],
        AuthStr: '563492ad6f9170000100000133f51eab663d4ca49c54c50c4e39bc80',
        url: 'https://api.pexels.com/v1/search?query=example+query&per_page=15&page=1'
      }
    },
    created() {
      axios.get(`url`, {
          'headers': {
            'Authorization': data().AuthStr
          }
        })
        .then((response => {
            this.listings = response.data;
          })
          .catch((error) => {
            console.log(error)
          })
        }
    }
  }

</script>
<style>

</style>
