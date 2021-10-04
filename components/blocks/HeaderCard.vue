<template>
  <div class="flex justify-between">
    <div
      class="header-bg flex content-end flex-wrap justify-end"
      v-bind:style="{ 'background-image': 'url(' +
    cardInfo.image + ')'
    }">
    </div>
    <div class=" w-4/5 lg:pb-28 pb-16 pr-7 pl-9 flex flex-col justify-center md:w-1/3">
      <h1 v-html="cardInfo.title" class="text-stBrown font-medium text-3xl lora mt-20"></h1>
      <div v-html="cardInfo.body" ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardInfo: {
      type: [Object, Array]
    }
  },

}
</script>

<style>

</style>
