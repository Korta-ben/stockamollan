<template>
<!--    <NuxtLink :to="{ name: 'sagner-slug', params: { slug: story.slug } }"-->
<!--              class="max-w-xs max-h-80 w-80 h-80 mb-8 flex bg-stLightGreen  rounded-2xl md:w-1/2 "-->

<!--    >-->
<!--      <div class="w-1/2 rounded-l-2xl bg-center bg-cover" v-bind:style="{ 'background-image': 'url(' + story.acf.header_image + ')'-->
<!--    }">-->

<!--      </div>-->
<!--      <div class="w-1/2  h-auto  text-center rounded-r-2xl flex flex-col justify-center">-->
<!--        <h2 v-html="story.title.rendered " class=" pb-5 text-xl font-medium break-all"></h2>-->
<!--        <div class="flex  justify-center items-center">-->
<!--          <span  class="bg-stBrown tipIcon inline-block  w-5 h-5 mr-1.5 "> </span>-->
<!--          <span  class="text-sm font-medium">LÄS MER</span>-->
<!--        </div>-->
<!--      </div>-->

<!--    </NuxtLink>-->

  <NuxtLink :to="{ name: 'sagner-slug', params: { slug: story.slug } }"
            class="rounded-2xl bg-stLightGreen w-full h-80 flex  lg:w-5/12 justify-between">

    <div
      class="w-5/12 bg-cover bg-center rounded-l-2xl"
      v-bind:style="{ 'background-image': 'url(' + story.acf.header_image + ')' }">

    </div>

    <div class=" w-7/12  flex flex-col justify-center content-center items-center ">
      <h2 v-html="story.title.rendered " class=" pb-5 text-xl font-medium break-all text-center"></h2>
              <div class="flex  justify-center items-center">
                <span  class="bg-stBrown tipIcon inline-block  w-5 h-5 mr-1.5 "> </span>
                <span  class="text-sm font-medium">LÄS MER</span>
              </div>
    </div>

  </NuxtLink>

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
