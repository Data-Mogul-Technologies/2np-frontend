<template>
    <div class="field">
      <label class="label">Service Type:</label>
      <span class="select">
      <select name ="ServiceTypeSelect" v-model="selectedServiceType" @change="changeServiceType()">
          <option v-for="ServiceType in ServiceType" v-bind:key="ServiceType.service_type_id" :value="ServiceType.service_type_id">
              {{ServiceType.name}}
              </option>
      </select>
      </span>
    </div>
    
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "ServiceTypeDrop",
  data: function(){
    return {
        selectedServiceType: 0,
        ServiceType: [],
    }

  },
  methods:{
    changeServiceType(){
      this.$emit('changeServiceType', this.selectedServiceType)
    }

  },
  mounted(){
      axios.get('https://api-2np.herokuapp.com/ServiceType').then(response =>{
          this.ServiceType = response.data;
          console.log(response.data);
      }).catch(e =>{

      })
  },
  
};
</script>
 
<style>
</style>