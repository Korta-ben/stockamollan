<template>
  <div class="flex justify-between">
    <div class="header-bg flex content-end flex-wrap justify-end" v-bind:style="{ 'background-image': 'url(' +
    cardInfo.image + ')'
    }">

        <img src="~/assets/images/pointer.png" class="h-14 float-right -mr-7 -rotate-12"/>


    </div>
    <div class=" w-4/5 pb-28 pr-7 pl-9">
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
