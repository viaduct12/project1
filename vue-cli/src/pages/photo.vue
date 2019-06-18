<template>
  <div id="photo">

    <h1>{{title}}</h1>

    <img class="place-pic" v-bind:src="info">



  </div>
</template>
<script>
  import axios from 'axios'

  export default {
    name: 'photo',
    data() {
      return {
        info: null,
        title: 'photo page'
      }

    },
    mounted() {
      axios
        .get('https://api.pexels.com/v1/search?', {
          params: {
            query: "Seattle",
          },
          headers: {
            Authorization: "563492ad6f9170000100000133f51eab663d4ca49c54c50c4e39bc80"
          },
        })
        .then(response => {
          this.info = response.data.photos[0].src.landscape
          console.log(response.data.photos[0].src.landscape)
        })
    }
  }

</script>
<style>
  .place-pic {
    width: 580px;
    height: auto;
    align-content: center;
    margin: 20px;
  }

</style>
