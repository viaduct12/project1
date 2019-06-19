// UsrMsg.vue file
<template>
  <div>
  </div>
</template>

<script>
export default {
  name: "travels",
  props: {
    cityCode: "",
    destinationCode: "",
    departing: ""
  },
  data() {
    return {
      cityName: "",
      cityCode: "",
      destinationCode: "",
      departing: ""
    };
  },
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
