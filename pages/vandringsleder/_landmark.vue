<template>
  <main class="py-48 siteMaxWidth xl:px-36 lg:px-28 ">
    <h1 class=" lora font-medium text-3xl text-center px-12 pb-14">Sevärdheter i Stockamöllan</h1>

    <section class="p-7 lg:py-7">
      <NuxtLink v-for="landmark in landmarks" :key="landmark.id"
                       class="mb-7 block rounded-xl hover:shadow-2xl transition"
                :to="{ name: 'sevardheter-slug', params: { slug: landmark.post_name } }"
      >

          <div class="bg-stLightGreen text-xl leading-6 pb-5 rounded-xl lg:flex lg:place-content-center lg:pb-0">
            <div class="lg:w-1/3 flex">
              <img class="rounded-t-xl object-cover h-auto lg:rounded-tr-none lg:rounded-bl-xl"
                   :src="landmark.acf.header_image">
            </div >
            <div class=" pt-10 px-7 lg:pl-24 lg:w-1/3 lg:py-5 lg:flex lg:flex-col " >
              <h3 class="font-medium text" v-html="landmark.post_title"></h3>
              <TheLandmarkRouteInfo v-if="landmark.acf.vandringslederna" :vandringslederna="landmark.acf.vandringslederna"/>
              <div class="flex mb-3 lg:pt-3 lg:pb-0 py-3 mt-6 mb-auto items-center -ml-4">
                <span class="accessibility-icon distance bg-stGreen flex-shrink-0">
                </span>
                        <span class="text-sm text-stGreen  font-medium leading-4 flex-shrink-0">CA {{ landmark.acf.distance }} KM</span>
                        <ul class="flex "  >
                          <li  v-for="icon in landmark.acf.accessibility" :key="icon.id"
                               class="pt-1">
                  <span class="accessibility-icon bg-stGreen " :class="icon">
                  </span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="px-7 lg:pr-24 lg:w-1/3 lg:flex lg:flex-col lg:justify-between lg:py-5">
              <h3 class="hidden lg:block text-xl font-medium">Kännetecken</h3>
              <p  class="hidden  lg:block text-sm" v-html="landmark.acf.kannetecken">

              </p>
              <div class="text-sm text-stGreen flex justify-between py-10 lg:py-0">
                <div class="flex font-bold">

                    <span  class="bg-stGreen tipIcon inline-block  w-5 h-5 mr-1.5 "> </span>
                    <span >LÄS MER</span>

                </div>
              </div>
            </div>
        </div>
      </NuxtLink>
    </section>
  </main>


</template>
<script>

export default {
  data() {
    return {
      trails:this.$store.getters.getHikingTrails,

    }
  },

  computed:{
    landmarks(){

      // let spots = this.$store.getters.getLandmarks.filter(o => o.acf.vandringslederna)
      // return spots.filter( l => l.acf.vandringslederna.filter( v => v.post_name === this.$route.params.landmark).pop)
      //   console.log(this.trails.filter(o => o.slug === this.$route.params.landmark)[0].acf)
      return this.trails.filter(o => o.slug === this.$route.params.landmark)[0].acf?.sevardheter
      // let onTheTrail = this.$store.getters.getLandmarks.filter(o => o.acf.vandringslederna)
      // return onTheTrail.filter( l =>
      //   l.acf.vandringslederna.filter( v => v.slug == this.$route.params.landmark).pop())

    }
  }



}
</script>
