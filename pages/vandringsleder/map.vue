<template>

  <main >

    <div class="py-3 absolute object-left trails-wedgit z-10">
      <ul>

        <li v-for="trail in trails" :key="trail.id"

        > <input
          type="checkbox"
          :id="trail.id"
          hidden
          @click="updateLayerVisibility(trail);">
          <label
            class="w-auto md:w-52 text-stGreen bg-white py-3.5 my-2 font-medium flex pl-3.5 mappage-route-visibility"
            :for="trail.id">
            <span
              class="circle-route-icon w-4 h-4 mr-4  rounded-full inline-block border-trlYellow"
              :class="trail.acf.colour.value"> </span>
            <span class="route-name hidden md:inline-block">{{ trail.acf.colour.label }} slinga</span>
          </label>
        </li>

      </ul>
    </div>
    <div id="map"  class=" h-screen w-full">
    </div>
  </main>
</template>

<script>
import mapboxgl from 'mapbox-gl'


import axios from "axios";
export default {


  data() {
    return {
      // routeDetails: [],
      map:{

      },
      trails:this.$store.getters.getHikingTrails,
      landmarks:this.$store.getters.getLandmarks,
      isDisabled:false


    }
  },

  created(){

  },


  mounted() {
    this.renderMap(this.$config.apiSecret);

    this.trails.forEach(o => this.addMapboxLayer(o));


  },

  methods:{
    renderMap(apiSecret){
      mapboxgl.accessToken = apiSecret
      this.map = new mapboxgl.Map({
        container: 'map',
        style:'mapbox://styles/ashish64/ckt2pjn1o27yd18nz0okz8p2b',
        zoom:13.5,
        center:[13.374228, 55.945831],
        displayControlsDefault: false,
      })


      const locateMe = new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true,
        showUserHeading: true
      });

      this.map.addControl(locateMe);
      //trigger geo location on page load
      this.map.on('load', () => {
        locateMe.trigger();
      });
    },

    addMapboxLayer(layer){
      console.log(this.$route)

      let trace = (this.$route.query.name == undefined || this.$route.query.name  === layer.slug) ? "visible" : "none"

      // console.log(trace)

      this.map.on('load', () => {
        this.map.addSource(layer.slug, {
          'type': 'geojson',
          'data':JSON.parse(layer.acf.map_box)
        });
        this.map.addLayer({
          'id': layer.slug,
          'type': 'line',
          'source': layer.slug,
          'layout': {
            'line-join': 'round',
            'line-cap': 'round',
            'visibility': trace
          },
          'paint': {
            'line-color':layer.acf.hexcolour,
            'line-width': 3,
            'line-dasharray': layer.acf.line_type === "true" ? [2, 2] : [1, 0],
          }
        });
      });

    },




    updateLayerVisibility(layerId){

      let layerStatus = this.map.getLayoutProperty(layerId.slug,'visibility');
      layerStatus === "visible" ?  this.map.setLayoutProperty(layerId.slug, 'visibility',  'none') :
        this.map.setLayoutProperty(layerId.slug, 'visibility',  'visible')
      return layerStatus


    },

  },



}
</script>
