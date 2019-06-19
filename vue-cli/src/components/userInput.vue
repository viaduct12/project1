<template>
  <div id="userInput">
    <input placeholder="Enter Text Here" v-model="tempMessage" @keyup.enter="submit"/>
  </div>
</template>

<script>
export default {
  name: "userInput",
  data() {
    return {
      tempMessage: ""
    };
  },
  methods: {
    submit: function() {
      this.$emit("inputData", this.tempMessage);
      
      
      this.$store.commit({
        type: 'changeCity', 
        
        newCity: this.tempMessage
        });
        this.tempMessage = "";
    }

  }
};
</script>
