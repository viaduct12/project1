<template>
  <div id="home">
    <!-- <h1>{{msg}}</h1> -->

    <section class="section">
      <!-- <h3 class="title is-3" v-text="message"></h3> -->
      <p class="time" v-text="currentTime"></p>
    </section>

    <p>{{question}}</p>
    <!-- <input class="question" type="text" value=""> -->
    <userInput @inputData="updateMessage" />
  




  </div>
</template>
<script>
  import moment from 'moment';
  import Results from "../components/Results.vue"
  import userInput from "../components/userInput.vue";

  export default {
    name: 'home',
    components: {
     Results,
      userInput
    },
    data() {
      return {
        msg: "Home Page",
        question: "Where would you like to go?",
        message: 'Current Time:',
        currentTime: null,
        childData: ""
      }
    },
    methods: {
      updateCurrentTime() {
        this.currentTime = moment().format('LTS');
      },
      updateMessage(variable) {
        this.childData = variable;
      }
    },
    created() {
      this.currentTime = moment().format('LTS');
      setInterval(() => this.updateCurrentTime(), 1 * 1000);
    }
  }

</script>


<style lang="scss">
  #home {
    background-image: url("../assets/Puerto-Rico.jpg");
    background-size: cover;
    height: 600px;
    background-repeat: no-repeat;
    background-position: fixed;
  }

  section.section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 110px;
    background: transparent;
  }

  h3.is-3,
  p.time {
    color: white;
  }

  .time {
    font-size: 7em;
    font-weight: bold;
  }

  p {
    color: #ffffff;
    font-size: 34px;
  }

  .question {
    margin: 20px;
    height: auto;
    width: 250px;
    text-align: center;
  }

</style>
