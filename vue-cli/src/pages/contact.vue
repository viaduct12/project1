<template>
  <div id="contact">

    <h1>{{title}}</h1>

    <div class="contact">
      <form>
        <div class="form-group">
          <div class="input-group-prepend">

            <input type="text" class="form-control" name="">
          </div>
          <div class="input-group-prepend">

            <input type="text" class="form-control" name="">
          </div>
          <div class="input-group-prepend">

            <textarea class="form-control">

		 				</textarea>
          </div>
          <button class="btn btn-primary btn-block">Submit</button>
        </div>
      </form>
    </div>


  </div>
</template>
<script>
  import axios from 'axios'


  export default {
    name: 'contact',
    data() {
      return {

        title: "Contact"
      }
    }
  }

</script>
<style scoped>
  .contact form {

    margin: 32px auto;

  }

  .contact input {
    width: 220px;
  }

  .contact button {
    width: 150px;
  }

  .contact form .form-control {
    margin-bottom: 18px;
  }

  .contact form textarea {
    min-height: 220px;
    width: 200px;
  }

</style>
