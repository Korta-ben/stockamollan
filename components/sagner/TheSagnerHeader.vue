<template>
  <div class="px-7">
    <h1 class="pt-20 pb-10 text-center lora font-medium text-3xl" v-html="pageHeader.title"></h1>
    <p class="text-center text-sm" v-html="pageHeader.intro"></p>
    <TheSagneRouteDetails :routeDetails="pageHeader.vandringslederna[0].acf"/>
    <div class="flex gap-8 items-center">
      <img :src="pageHeader.header_image" class=" max-w-xs w-80">
      <div v-html="pageHeader.introduction"></div>
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
