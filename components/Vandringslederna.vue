<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 px-7 ">
    <TheRouteBlock v-for="trail in trails" :key="trail.id" :trailInfo="trail" :isHome="isHome"/>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data(){
    return{
      trails:this.$store.getters.getHikingTrails,
      isHome: this.$route.name === "index" ? true : false
    }
  },

  methods:{
    // isHome(){
    //   return this.$route.name === "index" ? true : false
    // }
  }

}
</script>

<style scoped>

</style>
