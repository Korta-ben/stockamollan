<template>
  <section
    class="flex lg:pt-40 pt-20  flex-col items-center lg:m-auto lg:items-start lg:max-w-4xl  lg:flex-row-reverse">
    <div class="px-7 pb-12 lg:w-1/2 text-center lg:text-left">
      <h3 v-html="hittaHitCard.title" class=" lora font-medium text-3xl leading-9  "></h3>
      <div v-html="hittaHitCard.body" class="pt-12 "></div>
    </div>
    <div class="px-7 lg:w-1/2">
      <img :src="hittaHitCard.image" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    hittaHitCard: {
      type: [Object, Array]
    }
  },
}
</script>

<style scoped>

</style>
