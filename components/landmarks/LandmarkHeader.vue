<template>
  <section>
      <div class=" bg-no-repeat bg-cover bg-bottom pr-7 " v-bind:style="{ 'background-image': 'url(' +
    bgHeader + ')'
    }">
        <div class="landmark-custom pl-7 landmark-header-overlay bg-no-repeat bg-right bg-cover leading-9"></div>
      </div>
    <div class="px-7 -mt-36">
      <h1 v-html="headerTitle" class="lora font-medium text-3xl text-stCream pb-9"></h1>
      <div class="bg-stLightGreen px-11 pt-11 rounded-t-xl">
        <span class="font-medium text-xl ">Hittas på slinga</span>
        <LandmarkRouteDetail  :routeDetails="routeDetails"  class="pt-3.5"/>
        <h4 class="font-medium text-2xl leading-6 pb-3.5">Kännetecken</h4>
        <p v-html="landmarkHighlights" class="text-sm leading-5 pb-9"></p>

      </div>
      <div id="map" class="w-full h-64 ">

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
      routeDetails: [],
      access_token:'pk.eyJ1IjoiYXNoaXNoNjQiLCJhIjoiY2txcW41amY1MThlMzJwbnBxYXZpenBudSJ9.NbUAWVcMrsioL4v4Q2Ro9Q',
      map:{

      }
    }
  },

  async fetch() {
    this.routeDetails = await fetch(
      `http://stockamollan.local/wp-json/acf/v3/vandringslederna/${this.routeStuff}`
    ).then(res => res.json())


  },

  computed :{
    bgHeader(){
      return this.pageData?.acf.header_image || ''
    },
    headerTitle(){
      return this.pageData?.title.rendered || ''
    },
    routeStuff(){
      return this.pageData?.acf.vandringslederna || ''
    },
    landmarkHighlights(){
      return this.pageData?.acf.kannetecken || ''
    }
  },
  mounted() {
    this.createMap()
  },
  methods:{
    createMap(){
      mapboxgl.accessToken = this.access_token
      this.map = new mapboxgl.Map({
        container: 'map',
        style:'mapbox://styles/ashish64/ckr6bve1m0k5g18t2s76syshs',
        zoom:15,
        center:[13.377, 55.949]
      })
    }
  }
}
</script>

<style scoped>
#map{
  ;
}
</style>
