<template>
  <div id="contact">

    <h1>{{title}}</h1>

    <div class="contact">
      <form>
        <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
        <div class="mt-2">Value: {{ text }}</div>
        <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
        <div class="mt-2">Value: {{ text }}</div>

        <input type="text" class="form-control" name="">
   
    <div class="input-group">

      <textarea class="form-control">

		 				</textarea>
    </div>
    <button class="btn btn-primary btn-block">Submit</button>
 
  </form>
 </div>
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
  





</style>
