<template>
  <div class="pt-12 pb-16 bg-stGreen bg-opacity-80">
    <h3 class="pt-0.5 text-stCream font-medium text-3xl text-center">
      <img src="~/assets/images/tips.svg"  class="inline-block"/>
      {{ tipCard.title }}
    </h3>
    <div v-html="tipCard.body" class="text-center px-7 pt-5 text-stCream text-lg pb-32">

    </div>
    <div v-html="tipCard.button_text"
         class="text-center py-3.5  leading-6 mx-7  text-stCream text-xl font-medium border-2 border-stCream">

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
