<template>
  <div  class="pt-7 mb-14  rounded-xl trail-shadow hover:shadow-2xl transition">
    <h3 class="font-semibold text-xl leading-6 px-7 text-stBrown mb-5">
      <div class="w-4 h-4 mr-4 rounded-full inline-block" :class="trailInfo.acf.colour.value"> </div>
      {{ trailInfo.title.rendered}}
    </h3>
    <div class="flex mb-5 px-7">
      <span class="text-sm font-medium leading-4 mr-4">
          <img src="~/assets/images/distance.svg"  class="inline-block">
        CA {{ trailInfo.acf.distance }} KM
      </span>
      <ul class="flex px-7">
        <li  v-for="icon in trailInfo.acf.accessibility">
          <span class="accessibility-icon bg-stBrown" :class="icon"></span>
        </li>
      </ul>
    </div>
    <div class="text-sm font-normal leading-6 mb-9 px-7" v-html="trailInfo.content.rendered">

    </div>
    <div class="bg-stGreen text-stCream uppercase font-semibold text-sm leading-4 w-full py-4 text-center">
      <NuxtLink :to="{name: 'vandringsleder-landmark', params:{landmark:trailInfo.slug}}" >
        Sevärdheter på slingan
      </NuxtLink>
    </div>
  </div>
</template>

<script>

export default {

  props: {
    trailInfo: {
      type: [Object, Array]
    }
  },

}
</script>

<style scoped>

</style>
