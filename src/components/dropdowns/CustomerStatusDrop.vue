<template>
    <div class="field">
      <label class="label">Choose customer status:</label>
      <span class="select">
      <select name ="customerStatusTypeSelect" v-model="selectedCustomerStatus" @change="changeStatusType()">
          <option v-for="statusType in CustomerStatusTypes" v-bind:key="statusType.customer_status_id" :value="statusType.customer_status_id">{{statusType.name}}</option>
      </select>
      </span>
      
    </div>
    
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "CustomerStatusDrop",
  data: function(){
    return {
        selectedCustomerStatus: 0,
        CustomerStatusTypes: [],
    }

  },
  methods:{
    changeStatusType(){
      this.$emit('changeStatusType', this.selectedCustomerStatus)
    }

  },
  mounted(){
      axios.get('https://api-2np.herokuapp.com/StatusTypes').then(response =>{
          this.CustomerStatusTypes = response.data;
          console.log(response.data);
      }).catch(e =>{

      })
  },
  
};
</script>
 
<style>
</style>