<template>
  <section>
      <div class=" bg-no-repeat bg-cover bg-bottom pr-7 lg:page-header-height  md:bg-top" v-bind:style="{ 'background-image': 'url(' +
    bgHeader + ')'
    }">
        <div
          class="landmark-custom pl-7 landmark-header-overlay bg-no-repeat bg-right bg-cover leading-9 lg:page-header-height  lg:w-1/2"></div>
      </div>
    <div class="px-7  xl:px-36 lg:px-28  -mt-36 lg:-mt-72 ">
      <h1 v-html="headerTitle" class="lora font-medium text-3xl text-stCream pb-9"></h1>
      <div class="flex flex-col lg:flex-row">
        <div
          class="bg-stLightGreen px-11 pt-11  rounded-t-xl  flex flex-col content-center lg:pt-5 lg:rounded-t-none lg:w-3/4 lg:rounded-l-2xl md:flex-wrap md:flex-row lg:h-64">
          <div class="md:w-1/2 md:pr-10 lg:pl-20">
            <span class="font-medium text-xl ">Hittas på slinga</span>
            <LandmarkRouteDetail  :routeDetails="routeStuff"  class="pt-3.5"/>
          </div>
          <div class="md:w-1/2 md:px-10 lg:pr-20">
            <h4 class="font-medium text-2xl leading-6 pb-3.5">Kännetecken</h4>
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
    this.createMap(),
    this.loadStenbocksstenen()
  },
  methods:{
    createMap(){
      mapboxgl.accessToken = this.access_token
      this.map = new mapboxgl.Map({
        container: 'map',
        style:'mapbox://styles/ashish64/ckrq20mqo0drn18mno0rxyfpu',
        zoom:18,
        center:[13.368970, 55.950494]
      })
    },

    loadStenbocksstenen(){
      this.map.on('load', () => {
        this.map.addSource('route', {
          'type': 'geojson',
          'data': {
            'type': 'Feature',
            'properties': {
              "title": "Stenbocksstenen"
            },
            'geometry': {
              'type': 'LineString',
              'coordinates': [
                [13.375628, 55.9455],
                [13.375528, 55.945585],
                [13.375465, 55.945641],
                [13.375406, 55.945693],
                [13.37534, 55.945754],
                [13.375261, 55.945829],
                [13.375215, 55.945871],
                [13.374635, 55.94628],
                [13.374523, 55.946411],
                [13.374571, 55.94648],
                [13.374721, 55.946538],
                [13.37488, 55.946622],
                [13.375022, 55.946713],
                [13.375104, 55.946756],
                [13.375193, 55.946803],
                [13.375379, 55.946842],
                [13.37602, 55.946876],
                [13.3766, 55.946893],
                [13.376742, 55.946883],
                [13.37729, 55.946986],
                [13.377466, 55.947067],
                [13.377478, 55.947204],
                [13.377348, 55.947456],
                [13.377212, 55.947654],
                [13.377022, 55.948047],
                [13.376942, 55.948268],
                [13.376887, 55.948576],
                [13.376787, 55.948694],
                [13.376453, 55.948894],
                [13.376095, 55.949156]
              ]
            }
          }
        });
        this.map.addLayer({
          'id': 'route',
          'type': 'line',
          'source': 'route',
          'layout': {
            'line-join': 'round',
            'line-cap': 'round'
          },
          'paint': {
            'line-color': '#47BC52',
            'line-width': 2
          }
        });
      });



    }
  }
}
</script>

<style scoped>

</style>
