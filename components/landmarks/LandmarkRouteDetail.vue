<template>
<div>
<!--  <span class="w-4 h-4 mr-4  rounded-full inline-block" :class="routeDetails.colour.value"> </span>-->
<!--  <span class="text-stBrown text-xl font-medium leading-6">{{ routeDetails.colour.label }}</span>-->
  <ul class="flex flex-wrap">
    <li v-for="trail in routeDetails" class="w-1/2">
      <span class="w-4 h-4 mr-4  rounded-full inline-block" :class="trail.acf.colour.value"> </span>
      <span class="text-stBrown text-xl font-medium leading-6">{{ trail.acf.colour.label }}</span>
    </li>
  </ul>
<!--    <div class="flex mb-5 border-t border-stGreen pt-6 mt-6">-->
<!--      <span class="text-sm font-medium leading-4 text-stGreen">-->
<!--          <img src="~/assets/images/location-green.svg"  class="inline-block">-->
<!--       <span class="pt-0.5">CA {{ routeDetails.distance }} KM</span>-->
<!--      </span>-->
<!--    </div>-->
</div>
</template>

<script>


export default {
  props: {
    routeDetails: {
      type: [Object, Array]
    }
  },
}
</script>

<style scoped>

</style>
