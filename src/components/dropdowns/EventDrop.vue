<template>
    <div class="field">
      <label class="label">Event :</label>
      <span class="select">
      <select name ="EventSelect" v-model="selectedEvent" @change="changeEvent()">
          <option v-for="event in events" v-bind:key="event.event_id" v-bind:value="event.event_id">{{event.name}}</option>
      </select>
      </span>
    </div>
    
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "EventDrop",

  data: function(){
    return {
        selectedEvent: 0,
        events: [],
    }

  },

  methods:{
    changeEvent(){
      this.$emit('changeEvent', this.selectedEvent)
    }

  },

  mounted(){
      axios.get('https://api-2np.herokuapp.com/Events').then(response =>{
          this.events = response.data;
      }).catch(e =>{

      })
  },
  
};
</script>
 
<style>
</style>