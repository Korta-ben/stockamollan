<template>
<div>
<ul class="flex flex-wrap">
    <li v-for="trail in routeDetails" class="w-1/2">
      <span class="w-4 h-4 mr-4  rounded-full inline-block" :class="trail.acf.colour.value"> </span>
      <span class="text-stBrown text-xl font-medium leading-6">{{ trail.acf.colour.label }}</span>
    </li>
  </ul>
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
