<template>
  <div class="bg-stLightGreen text-xl leading-6 pb-5 rounded-b-xl lg:flex lg:place-content-center lg:pb-0">
    <div class="lg:w-1/3 flex">
      <img class="rounded-t-xl object-cover h-auto lg:rounded-tr-none lg:rounded-bl-xl"
           :src="landmark.acf.header_image">
    </div >
    <div class=" pt-14 px-7 2xl:px-24  dxl:pl-24 lg:pl-16  dxl:pr-16 lg:w-1/3 lg:py-12 lg:flex lg:flex-col " >
      <h3 class="font-medium text-2xl" v-html="landmark.title.rendered"></h3>
      <TheLandmarkRouteInfo  :vandringslederna="landmark.acf.vandringslederna[0].acf"/>
    </div>
    <div class="px-7 lg:pr-24 lg:w-1/3 lg:flex lg:flex-col lg:justify-between lg:py-12">
      <h3 class="hidden lg:block text-xl font-medium">Kännetecken</h3>
      <p  class="hidden   lg:block text-sm" v-html="landmark.acf.kannetecken">

      </p>
      <div class="text-sm text-stGreen  py-10 lg:py-0">

          <NuxtLink :to="{ name: 'sevardheter-slug', params: { slug: landmark.slug } }" class="flex">
            <span  class="bg-stGreen tipIcon inline-block  w-5 h-5 mr-1.5 "> </span>
            <span >LÄS MER</span>
          </NuxtLink>


      </div>
    </div>

  </div>

</template>

<script>

export default {
  props: {
    landmark: {
      type: [Object, Array]
    },
  },
}
</script>

<style scoped>

</style>
