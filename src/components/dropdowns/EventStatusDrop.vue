<template>
    <div class="field">
      <label class="label">Event Status:</label>
      <span class="select">
      <select name ="EventStatusSelect" v-model="selectedEventStatus" @change="changeEventStatus()">
          <option v-for="EventStatus in EventStatus" v-bind:key="EventStatus.event_status_id" :value="EventStatus.event_status_id">
              {{EventStatus.name}}
              </option>
      </select>
      </span>
      
    </div>
    
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "EventStatusDrop",
  data: function(){
    return {
        selectedEventStatus: 0,
        EventStatus: [],
    }

  },
  methods:{
    changeEventStatus(){
      this.$emit('changeEventStatus', this.selectedEventStatus)
    }

  },
  mounted(){
      axios.get('https://api-2np.herokuapp.com/EventStatus').then(response =>{
          this.EventStatus = response.data;
          console.log(response.data);
      }).catch(e =>{

      })
  },
  
};
</script>
 
<style>
</style>