<template>
  <div>
    <h2 class="text-3xl text-center text-stBrown lora font-medium leading-10 mb-11">
      Vandringslederna
    </h2>
    <TheRouteBlock v-for="trail in trails" :key="trail.id" :trailInfo="trail"/>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data(){
    return{
      trails:[]
    }
  },
  async fetch () {
    const { data } = await axios.get('http://stockamollan.local/wp-json/wp/v2/vandringslederna')
    this.trails = data
  },

}
</script>

<style scoped>

</style>
