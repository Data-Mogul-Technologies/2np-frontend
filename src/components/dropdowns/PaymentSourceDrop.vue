<template>
    <div class="field">
      <label class="label">Payment Source:</label>
      <span class="select">
      <select name ="PaymentSourceSelect" v-model="selectedPaymentSource" @change="changePaymentSource()">
          <option v-for="PaymentSource in PaymentSource" v-bind:key="PaymentSource.payment_source_id" :value="PaymentSource.payment_source_id">
              {{PaymentSource.name}}
              </option>
      </select>
      </span>
    </div>
    
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "PaymentSourceDrop",
  data: function(){
    return {
        selectedPaymentSource: 0,
        PaymentSource: [],
    }

  },
  methods:{
    changePaymentSource(){
      this.$emit('changePaymentSource', this.selectedPaymentSource)
    }

  },
  mounted(){
      axios.get('https://api-2np.herokuapp.com/PaymentSource').then(response =>{
          this.PaymentSource = response.data;
          console.log(response.data);
      }).catch(e =>{

      })
  },
  
};
</script>
 
<style>
</style>