<template>
  <div class="bg-stLightGreen">
  <NuxtLink :to="{ name: 'sevardheter-slug', params: { slug: landmark.slug } }" class=" text-xl leading-6 pb-5 rounded-b-xl lg:flex lg:place-content-center lg:pb-0">
    <div class="lg:w-1/3 flex">
      <img class="rounded-t-xl object-cover h-auto lg:rounded-tr-none lg:rounded-bl-xl"
           :src="landmark.acf.header_image">
    </div >
    <div
      class="  pt-14 px-7 2xl:px-24  dxl:pl-24 lg:pl-16  dxl:pr-16 lg:w-1/3 lg:py-12 lg:flex lg:flex-col justify-between" >
      <h3 class="font-medium text-2xl" v-html="landmark.title.rendered"></h3>
      <TheLandmarkRouteInfo v-if="landmark.acf.vandringslederna"  :vandringslederna="landmark.acf.vandringslederna"/>
      <div class="flex mb-3 lg:pt-3 lg:pb-0 py-3 mt-6 mb-auto items-center -ml-4">
<!--        <span class="accessibility-icon distance bg-stGreen flex-shrink-0">-->
<!--        </span>-->
<!--        <span class="text-sm text-stGreen  font-medium leading-4">CA {{ landmark.acf.distance }} KM</span>-->
        <ul class="flex "  >
          <li  v-for="icon in landmark.acf.accessibility" :key="icon.id"
               class="pt-1">
          <span class="accessibility-icon bg-stGreen " :class="icon">
          </span>
          </li>
        </ul>
      </div>

    </div>
    <div class="px-8 lg:pr-20 lg:w-1/3 lg:flex lg:flex-col lg:justify-between lg:pl-4 lg:py-12">
      <h3 class="hidden lg:block text-xl font-medium">Kännetecken</h3>
      <p  class="hidden   lg:block text-sm" v-html="landmark.acf.kannetecken">
      </p>
      <div class="text-sm text-stGreen  py-10 lg:py-0">

          <div  class="flex font-bold">
            <span  class="bg-stGreen tipIcon inline-block  w-5 h-5 mr-1.5 "> </span>
            <span >LÄS MER</span>
          </div>


      </div>
    </div>

  </NuxtLink>
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
