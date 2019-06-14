<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <nav class=" navbar navbar-expand-lg fixed-top row">

      <!-- <router-link tag="li" class="col" class-active="active" to="/" exact>MAIN</router-link> -->
      <router-link tag="li" class="col" class-active="active" to="/home" exact>home</router-link>
      <router-link tag="li" class="col" class-active="active" to="/photo" exact>photo</router-link>
      <router-link tag="li" class="col" class-active="active" to="/prices" exact>prices</router-link>

      <router-link tag="li" class="col" class-active="active" to="/things" exact>things</router-link>
      <router-link tag="li" class="col" class-active="active" to="/weather" exact>weather</router-link>

    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to our LMN Travel App'
      }
    }
  }

</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
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

</style>
