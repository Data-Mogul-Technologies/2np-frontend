<template>
    <div class="field">
      <label class="label">Customer Type:</label>
      <span class="select">
      <select name ="CustomerTypeSelect" v-model="selectedCustomerType" @change="changeCustomerType()">
          <option v-for="customerType in CustomerTypes" v-bind:key="customerType._id" :value="customerType.customer_type_id">{{customerType.name}}</option>
      </select>
      </span>
    </div>
    
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "CustomerTypeDrop",
  data: function(){
    return {
        selectedCustomerType: 0,
        CustomerTypes: [],
    }

  },
  methods:{
    changeCustomerType(){
      this.$emit('changeCustomerType', this.selectedCustomerType)
    }
    },
  mounted(){
      axios.get('https://api-2np.herokuapp.com/CustomerTypes').then(response =>{
          this.CustomerTypes = response.data;
      }).catch(e =>{

      })
  },
  
};
</script>
 
<style>
</style>