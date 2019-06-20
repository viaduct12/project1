<template>
  <div id="contact">

    <h1>{{title}}</h1>

    <div>
      <b-card-group deck>
        <b-card title="" header-tag="header" footer-tag="footer">
          <h6 slot="header" class="mb-0">Your Information</h6>
          <b-card-text>
            <h5 class="form-info">Name: </h5>
            <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
            <h5 class="form-info">Email: </h5>
            <b-form-input v-model="text" placeholder="Enter your email"></b-form-input>

            <h5 class="form-info">Comments: </h5>
            <b-form-textarea id="textarea" v-model="text" placeholder="Enter your comments here..." rows="3"
              max-rows="6">
            </b-form-textarea>

          </b-card-text>
          <b-button class="submit" href="#">Submit</b-button>
        </b-card>
      </b-card-group>
    </div>
  </div>




</template>
<script>
  import axios from 'axios'


  export default {
    name: 'contact',
    data() {
      return {
        title: "Contact",
        text: '',

      }
    }
  }

</script>
<style scoped>

  div {
    position: relative;
    margin: 5px;
    padding: 5px;
  
  }

  .form-info {
    text-align: left;
    margin: 20px;
  }


  .submit {
    background-color: #5eabe3;
  }

</style>
