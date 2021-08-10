<template>
    <div class="max-w-xs max-h-80 w-80 h-80 mb-8 flex items-end rounded-2xl"
         v-bind:style="{ 'background-image': 'url(' + story.acf.header_image + ')'
    }"
    >
      <div class="w-full bg-stLightGreen h-40  text-center rounded-b-2xl">
        <h2 v-html="story.title.rendered " class="pt-9 pb-5 text-xl font-medium"></h2>
        <div class="flex  justify-center">
          <span  class="bg-stBrown tipIcon inline-block  w-5 h-5 mr-1.5 "> </span>
          <span  class="text-sm font-medium">LÄS MER</span>
        </div>
      </div>

    </div>

</template>

<script>
export default {
  props: {
    story: {
      type: [Object, Array]
    },
  },
}
</script>

<style scoped>

</style>
