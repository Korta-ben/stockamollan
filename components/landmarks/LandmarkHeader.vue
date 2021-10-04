<template>
  <section>
      <div class=" bg-no-repeat bg-cover bg-bottom pr-7 lg:page-header-height  md:bg-top" v-bind:style="{ 'background-image': 'url(' +
    bgHeader + ')'
    }">
        <div
          class="landmark-custom pl-7 landmark-header-overlay bg-no-repeat bg-right bg-cover leading-9 lg:page-header-height  lg:w-1/2"></div>
      </div>
    <div class="px-7  xl:px-36 lg:px-28  -mt-36 lg:-mt-72 ">
      <h1 v-html="headerTitle" class="lora font-medium lg:text-5xl text-3xl text-stCream pb-9"></h1>
      <div class="flex flex-col lg:flex-row">
        <div
          class="bg-stLightGreen px-11 pt-11  rounded-t-xl  flex flex-col content-center lg:pt-5 lg:rounded-t-none lg:w-3/4 lg:rounded-l-2xl md:flex-wrap md:flex-row lg:h-64">
          <div class="md:w-1/2 md:pr-10 lg:pl-20">
            <span class="font-medium text-xl ">Hittas på slinga</span>
            <LandmarkRouteDetail  :routeDetails="routeStuff"  class="pt-3.5"/>
          </div>
          <div class="md:w-1/2 md:px-10 lg:pr-20">
            <h4 class="font-medium text-xl leading-6 pb-3.5">Kännetecken</h4>
            <p v-html="landmarkHighlights" class="text-sm leading-5 pb-9"></p>
          </div>
        </div>
        <div id="map" class="w-full lg:w-1/4 h-64">

        </div>
      </div>

    </div>
  </section>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import axios from "axios";

export default {

  props: {
    pageData: {
      type: [Object, Array]
    },

  },

  data() {
    return {
      // routeDetails: [],
      access_token:'pk.eyJ1IjoiYXNoaXNoNjQiLCJhIjoiY2txcW41amY1MThlMzJwbnBxYXZpenBudSJ9.NbUAWVcMrsioL4v4Q2Ro9Q',
      map:{

      }
    }
  },

  computed :{
    bgHeader(){
      return this.pageData?.acf.header_image || ''
    },
    headerTitle(){
      return this.pageData?.title.rendered || ''
    },
    routeStuff(){
      return this.pageData?.acf.vandringslederna[0].acf || ''
    },
    landmarkHighlights(){
      return this.pageData?.acf.kannetecken || ''
    }
  },
  mounted() {
    this.createMap(this.$config.apiSecret)
  },
  methods:{
    createMap(apiSecret){
      mapboxgl.accessToken = apiSecret
      this.map = new mapboxgl.Map({
        container: 'map',
        style:'mapbox://styles/ashish64/ckrq20mqo0drn18mno0rxyfpu',
        zoom:18,
        center:[13.368970, 55.950494]
      })
    },


  }
}
</script>

<style scoped>

</style>
