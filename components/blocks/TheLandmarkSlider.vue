<template>
  <div class="grid grid-cols-2 bg-stLightGreen mx-7 rounded-xl">
    <div class="bg-cover bg-center bg-top rounded-l-xl" v-bind:style="{ 'background-image': 'url(' +
    landmark.acf.header_image + ')'
    }"></div>
    <div class="py-7 px-6 	rounded-l-xl">
      <h2 v-html="landmark.title.rendered" class="pb-7"></h2>
      <p v-html="landmark.acf.kannetecken" class="pb-7"></p>
      <a href="#" class="flex justify-items-start justify-items-start">
        <span  class="bg-stGreen tipIcon inline-block  w-5 h-5 mr-1.5 "> </span>
        LÄS MER</a>
    </div>

  </div>
</template>

<script>

export default {
  props: {
    landmark: {
      type: [Object, Array]
    }
  },

}

</script>
