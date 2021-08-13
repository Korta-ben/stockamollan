<template>
  <div  class="px-7 mb-14 md:w-1/2 lg:w-1/3">
    <h3 class="font-medium text-xl leading-6 text-stBrown mb-5">
      <div class="w-4 h-4 mr-4 rounded-full inline-block" :class="trailInfo.acf.colour.value"> </div>
      {{ trailInfo.title.rendered}}
    </h3>
    <div class="flex mb-5">
      <span class="text-sm font-medium leading-4 mr-4">
          <img src="~/assets/images/distance.svg"  class="inline-block">
        CA {{ trailInfo.acf.distance }} KM
      </span>
      <ul class="flex">
        <li  v-for="icon in trailInfo.acf.accessibility">
          <span class="accessibility-icon bg-stBrown" :class="icon"></span>
        </li>
      </ul>
    </div>
    <div class="text-lg font-normal leading-5 mb-9">
      <p v-html="trailInfo.content.rendered">

      </p>
    </div>
    <div class="bg-stGreen text-stCream uppercase font-medium text-sm leading-4 w-full py-4 text-center">
      Sevärdheter på slingan
    </div>
  </div>
</template>

<script>

export default {

  props: {
    trailInfo: {
      type: [Object, Array]
    }
  },

}
</script>

<style scoped>

</style>
