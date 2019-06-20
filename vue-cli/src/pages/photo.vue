<template>
  <div id="photo">

    
      <h4 class="picked">Your Destination: {{msg}}</h4>
  


    <img id="background" class="place-pic" v-bind:src="info">




  </div>
</template>
<script>
  import axios from 'axios'
  import Results from "../components/Results.vue"
  import userInput from "../components/userInput.vue";

  export default {
    name: 'photo',
    
    data() {
      return {
        info: null,
        title: 'photo page',
        childData: "",
        msg: `${this.$store.getters.city}`,
      }
    },
    methods: {
      updateMessage(variable) {
        this.childData = variable;
      }
    },
    mounted() {
      axios
        .get('https://api.pexels.com/v1/search?', {
          params: {
            query: this.$store.getters.city,
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

.picked {
  font-size: 34px;
  color: #5eabe3;
}
  .place-pic {
    width: 680px;
    height: auto;
    align-content: center;
    margin: 20px;
  }

#background {
    background-size: cover;
    height: 450px;
    width: 75%;
    background-repeat: no-repeat;
    background-position: fixed;
}


</style>
