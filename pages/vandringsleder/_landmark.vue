<template>
  <main class="py-48 siteMaxWidth xl:px-36 lg:px-28 ">
    <h1 class=" lora font-medium text-3xl text-center px-12 pb-14">Sevärheterna i Stockamöllan</h1>

    <section class="p-7 lg:py-7">
      <div v-for="landmark in landmarks" :key="landmark.id"
                       class="mb-7 rounded-xl hover:shadow-2xl transition">

          <div class="bg-stLightGreen text-xl leading-6 pb-5 rounded-xl lg:flex lg:place-content-center lg:pb-0">
            <div class="lg:w-1/3 flex">
              <img class="rounded-t-xl object-cover h-auto lg:rounded-tr-none lg:rounded-bl-xl"
                   :src="landmark.acf.header_image">
            </div >
            <div class=" pt-10 px-7 lg:px-24 lg:w-1/3 lg:py-5 lg:flex lg:flex-col " >
              <h3 class="font-medium text" v-html="landmark.post_title"></h3>
              <TheLandmarkRouteInfo  :vandringslederna="landmark.acf.vandringslederna[0].acf"/>
            </div>
            <div class="px-7 lg:pr-24 lg:w-1/3 lg:flex lg:flex-col lg:justify-between lg:py-5">
              <h3 class="hidden lg:block text-xl font-medium">Kännetecken</h3>
              <p  class="hidden  lg:block text-sm" v-html="landmark.acf.kannetecken">

              </p>
              <div class="text-sm text-stGreen flex justify-between py-10 lg:py-0">
                <div class="flex ">
                  <NuxtLink :to="{ name: 'sevardheter-slug', params: { slug: landmark.post_name } }">
                    <span  class="bg-stGreen tipIcon inline-block  w-5 h-5 mr-1.5 "> </span>
                    <span >LÄS MER</span>
                  </NuxtLink>
                </div>
                <div>SÄGEN</div>
              </div>
            </div>
        </div>
      </div>
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
      return this.trails.filter(o => o.slug === this.$route.params.landmark)[0].acf?.sevardheter
    }
  }



}
</script>
