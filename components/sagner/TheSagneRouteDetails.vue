<template>
  <div class="text-center  font-medium text-sm">
    Hittas på slinga:
    <span class="w-3 h-3 mx-4  rounded-full inline-block" :class="routeDetails.colour.value"></span>
    <span class="text-stBrown text-sm font-medium leading-6">{{ routeDetails.colour.label }}</span>

    <div class="flex    mt-6 justify-center">
      <ul class="flex">
        <li  v-for="icon in routeDetails.accessibility" :key="icon.id">
          <span class="accessibility-icon bg-stBrown " :class="icon">
          </span>
        </li>
      </ul>
    </div>
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
