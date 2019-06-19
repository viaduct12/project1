<template>
  <div id="userInput">
    <input placeholder="Origin" v-model="tempMessage" @keyup.enter="submit"/>
    <input placeholder="Destination" v-model="destiny" @keyup.enter="submit"/>
    <input placeholder="Departure date" v-model="date" @keyup.enter="submit"/>        
  </div>
</template>

<script>
export default {
  name: "userInput",
  data() {
    return {
      tempMessage: "",
      destiny: "",
      date: ""
    };
  },
  methods: {
    submit: function() {
      this.$emit("inputData", this.tempMessage);
      this.$emit("destinyData", this.destiny);
      this.$emit("dateData", this.date);
      
      this.$store.commit({
        type: 'changeCity', 
        
        newCity: this.tempMessage
        });
    
      this.$store.commit({
        type: 'changeFlightInfo',
        newFlightInfo: {
          originCode: this.tempMessage,
          destinationCode: this.destiny,
          dateCode: this.date
        }
      });
      
        this.tempMessage = "";
        this.destiny = "";
        this.date = "";
    }

  }
};
</script>
