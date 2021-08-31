<template>
  <div class="pt-12 pb-20 tipslgbg lg:max-w-xl lg:px-16 bg-cover bg-no-repeat bg-right">
    <h3 class="pt-0.5 text-stCream font-medium text-3xl text-center lg:text-left lg:pl-7">
      <img src="~/assets/images/tips.svg"  class="inline-block"/>
      {{ tipCard.title }}
    </h3>
    <div v-html="tipCard.body" class="text-center lg:text-left px-7 lg:pr-20 pt-5 text-stCream text-base pb-32">

    </div>
    <div v-html="tipCard.button_text"
         class="text-center py-3 leading-6 mx-8 text-stCream text-lg font-medium border-2 border-stCream">

    </div>
  </div>
</template>

<script>
export default {
  props: {
    tipCard: {
      type: [Object, Array]
    }
  },
}
</script>

<style scoped>

</style>
