<template>
  <div>
    <h1>View Consultant Status</h1>
    <div class="field">
      <label class="label">Consultant Status Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="First Name"
          v-model="ConsultantStatusName"
        />
      </div>
    </div>
    <div class="control">
      <button class="button is-success" @click="updateConsultantStatus">Update</button>
      <router-link :to="{name:'ConsultantStatusList'}"><button class="button is-danger">Cancel</button></router-link>
    </div>
  
  </div>
  

    
</template>
<script>
// import axios
import axios from "axios";
 
export default {
  name: "ViewConsultantStatus",
  data() {
    return {
        ConsultantStatusName : "",
        
    };
  },
  created: function () {
    this.getConsultantStatusById();
  },
  methods: {
    // Get Consultant Status By Id
    async getConsultantStatusById() {
      try {
        const response = await axios.get(
          `https://api-2np.herokuapp.com/api/ConsultantStatus/${this.$route.params.id}`
        );
        this.ConsultantStatusName = response.data.name;
       

      } catch (err) {
        console.log(err);
      }
    },
    
    // Update Consultant
    async updateConsultantStatus() {
      try {
        await axios.put(
          `https://api-2np.herokuapp.com/api/ConsultantStatus/${this.$route.params.id}`,
          {
            name: this.ConsultantStatusName,
            
          }
        );
        this.ConsultantStatusName = "";
       
        
        this.$router.push("/page/consultant-status");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>



<style>
</style>