<template>
  <div class="px-7">
    <div class="flex gap-8 items-center justify-around flex-col-reverse md:flex-row">
      <img :src="pageHeader.header_image" class="w-1/2">
      <div>
        <h1 class="pt-20 pb-10 text-center lora font-medium text-3xl" v-html="pageHeader.title"></h1>
        <p class="text-center text-sm" v-html="pageHeader.intro"></p>
        <TheSagneRouteDetails :routeDetails="pageHeader.vandringslederna[0].acf"/>
        <div v-html="pageHeader.introduction"></div>
      </div>

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
