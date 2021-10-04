<template>
  <div class="py-20 tipslgbg lg:max-w-xl lg:px-24 bg-cover bg-no-repeat bg-right">
    <h3 class="pt-0.5 text-stCream font-medium text-3xl text-center lg:text-left lg:pl-7">
      <img src="~/assets/images/tips.svg"  class="inline-block"/>
      {{ tipCard.title }}
    </h3>
    <div v-html="tipCard.body" class="text-center tracking-tight lg:text-left px-7 lg:pr-20 pt-5 text-stCream text-base pb-16">

    </div>
    <div
         class="text-center  leading-6 mx-8 text-stCream text-lg font-medium border-2 border-stCream flex" >
      <NuxtLink :to="tipCard.linked_page"
                v-html="tipCard.button_text"
                class="py-3 w-full"
      >

      </NuxtLink>
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
