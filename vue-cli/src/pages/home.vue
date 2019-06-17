<template>
  <div id="home">
    <h1>{{msg}}</h1>
    <div>Now: {{ now }}</div>
    <div>Now: {{ new Date() | date }}</div>
    <div>Now: {{ $date(new Date()) }}</div>



    <p>{{question}}</p>
    <input class="question" type="text" value="">




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
    },
    computed: {
        now() {
            return this.$date(new Date());
        }
    }
  }

</script>
<style lang="scss">

.question {
 margin: 20px;
 height: auto;
 width: 250px;
 text-align: center;
}





</style>
