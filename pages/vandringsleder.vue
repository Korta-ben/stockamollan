<template>

    <main >
    <div class="py-3 absolute object-left trails-wedgit z-10">
      <ul>
        <li
          class="w-auto md:w-52 text-stGreen bg-white py-3.5 my-2 font-medium flex pl-3.5"
          v-for="trail in trails" :key="trail.id"  @click="updateLayerVisibility(trail)">
          <span class="w-4 h-4 mr-4  rounded-full inline-block border-trlYellow" :class="trail.acf.colour.value"> </span>
          <span class="hidden md:inline-block">{{ trail.acf.colour.label }} slinga</span>
        </li>
      </ul>
    </div>


      <div id="map"  class=" h-screen w-full ">

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
        style:'mapbox://styles/ashish64/cks04p2e41rsp18t34ohudpsb',
        zoom:13.5,
        center:[13.374228, 55.945831],
        displayControlsDefault: false,
        })

      this.map.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true
          },
// When active the map will receive updates to the device's location as it changes.
          trackUserLocation: true,
// Draw an arrow next to the location dot to indicate which direction the device is heading.
          showUserHeading: true
        })
      );


    },

    addMapboxLayer(layer){
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
            'visibility': "visible"
          },
          'paint': {
            'line-color':layer.acf.hexcolour,
            'line-width': 3,
          }
        });
      });

    },


    updateLayerVisibility(layerId){
      let layerStatus = this.map.getLayoutProperty(layerId.slug,'visibility');

       layerStatus == "visible" ?  this.map.setLayoutProperty(layerId.slug, 'visibility',  'none') :
        this.map.setLayoutProperty(layerId.slug, 'visibility',  'visible')

    },

  },



}
</script>
