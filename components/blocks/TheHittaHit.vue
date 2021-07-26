<template>
  <div class="px-7 mb-32">
    <h3 v-html="hittaHitCard.title" class="text-stBrown lora font-medium text-3xl text-center leading-9 "></h3>
    <div v-html="hittaHitCard.body" class="text-center py-7">
    </div>
    <img :src="hittaHitCard.image" />
  </div>

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
