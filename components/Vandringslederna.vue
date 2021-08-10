<template>
  <div class="flex flex-col md:flex-row md:flex-wrap">
    <TheRouteBlock v-for="trail in trails" :key="trail.id" :trailInfo="trail"/>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data(){
    return{
      trails:this.$store.getters.getHikingTrails,
    }
  },


}
</script>

<style scoped>

</style>
