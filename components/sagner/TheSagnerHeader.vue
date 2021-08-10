<template>
  <div class="px-7">
    <h1 class="pt-20 pb-10 text-center lora font-medium text-3xl" v-html="pageHeader.title"></h1>
    <p class="text-center text-sm" v-html="pageHeader.intro"></p>
    <TheSagneRouteDetails :routeDetails="pageHeader.vandringslederna[0].acf"/>
    <div class="">
      <img :src="pageHeader.header_image" class="rounded-full max-w-xs w-72">
    </div>
  </div>

</template>

<script>

export default {

  props: {
    pageHeader: {
      type: [Object, Array]
    },
  },


}
</script>

<style scoped>

</style>
