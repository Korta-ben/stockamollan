<template>
  <div  class="pt-7 mb-14  rounded-xl trail-shadow hover:shadow-2xl transition flex flex-col justify-between">
    <h3 class="font-semibold lg:text-xl md:text-lg text-base leading-6 px-7 text-stBrown mb-5">
      <div class="w-4 h-4 mr-4 rounded-full inline-block" :class="trailInfo.acf.colour.value"> </div>
      {{ trailInfo.title.rendered}}
    </h3>
    <div class="flex mb-5 px-7">
      <span class="text-sm font-medium leading-4 pr-4">
          <img src="~/assets/images/distance.svg"  class="inline-block">
        CA {{ trailInfo.acf.distance }} KM
      </span>
      <div v-if="trailInfo.acf.accessibility.length">|</div>
      <ul class="flex gap-x-3.5 ">
        <li  v-for="icon in trailInfo.acf.accessibility">
          <span class="accessibility-icon bg-stBrown" :class="icon"></span>
        </li>
      </ul>
    </div>
    <div class="text-sm font-normal leading-6 mb-9 px-7" v-html="trailInfo.content.rendered">

    </div>
    <div class="text-stCream flex uppercase font-semibold text-sm leading-4 w-full  text-center">
      <NuxtLink class="w-full py-4 bg-stGreen "  v-show="isHome" :to="{name: 'vandringsleder-landmark',
      params:{landmark:trailInfo.slug}}" >
        Sevärdheter på slingan
      </NuxtLink>
      <NuxtLink class="w-full py-4 bg-stGreen "  v-show="!isHome" :to="{name: 'vandringsleder-map', query:{name:trailInfo.slug}}" >
        Se på kartan
      </NuxtLink>
    </div>
  </div>
</template>

<script>

export default {

  props: {
    trailInfo: {
      type: [Object, Array]
    },
    isHome:{Boolean}
  },



}
</script>

<style scoped>

</style>
