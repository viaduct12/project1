// UsrMsg.vue file
<template>
  <div>
    <input
     class="question"
     placeholder="Origin ex: SEA"
     v-model="cityName"
     @keyup.enter="submit"
    />
    <input
     class="question"
     placeholder="Destination ex: LAX"
     v-model="destinationName"
     @keyup.enter="submit"
    />
    <input
     class="question"
     placeholder="Departure date ex: YYYY-MM-DD"
     v-model="departureDate"
     @keyup.enter="submit"
    />    
  </div>
</template>

<script>
export default {
  name: "travels",
  data() {
    return {
      cityName: "",
      cityCode: "",
      destinationCode: "",
      departing: ""
    };
  },
  methods: {
    submit: function() {
      this.$emit("origin", this.cityName);
      this.cityCode = this.cityName;
      this.cityName = "";
      // this.destinationCode = this.destinationName;
      // this.destinationName = "";
      // this.departing = this.departureDate;
      // this.departureDate = "";

      this.$emit("destiny", this.destinationName);
      this.destinationCode = this.destinationName;
      this.destinationName = "";
      this.$emit("dates", this.departureDate);
      this.departing = this.departureDate;
      this.departureDate = "";

    }
  }
};
</script>

<style>
  .question {
    margin: 20px;
    height: auto;
    width: 250px;
    text-align: center;
  }

</style>
