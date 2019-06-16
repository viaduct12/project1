<template>
  <div id="home">
    <h1>{{msg}}</h1>
    <h2>{{Time}}</h2>


    <p>{{question}}</p>
    <input type="text" value="">




  </div>
</template>
<script>
  export default {
    name: 'home',
    data() {
      return {

        msg: "Home Page",
        question: "Where would you like to go?"
      }
    }
  }

</script>
<style lang="scss">
  body {
    background-image: url('../assets/pexels-photo-62693.jpeg');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

</style>
