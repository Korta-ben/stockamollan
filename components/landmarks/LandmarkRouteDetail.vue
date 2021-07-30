<template>
<div>
  <span class="w-4 h-4 mr-4  rounded-full inline-block" :class="colour.value"> </span>
  <span class="text-stBrown text-xl font-medium leading-6">{{ colour.label }}</span>

    <div class="flex mb-5 border-t border-stGreen pt-6 mt-6">
      <span class="text-sm font-medium leading-4 text-stGreen">
          <img src="~/assets/images/location-green.svg"  class="inline-block">
        CA {{ loopDistance }} KM
      </span>
      <ul class="flex">
        <li  v-for="icon in accessibility">
          <span class="accessibility-icon bg-stGreen " :class="icon">
          </span>
        </li>
      </ul>
    </div>

</div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    routeDetails: {
      type: [Object, Array]
    }
  },

  computed:{
    colour() {
      return this.routeDetails.acf.colour
    },
    loopDistance() {
      return this.routeDetails.acf.distance
    },
    accessibility() {
      return this.routeDetails.acf.accessibility
    }

  }




}
</script>

<style scoped>

</style>
