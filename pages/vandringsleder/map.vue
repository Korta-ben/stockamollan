<template>

  <main >

    <div class="py-3 absolute object-left trails-wedgit z-10">
      <ul>

        <li v-for="trail in trails" :key="trail.id">
          <input
          type="checkbox"
          :id="trail.id"
          hidden
          @click="updateLayerVisibility(trail);"
          :checked="($route.query.name == undefined ||
          $route.query.name  === trail.slug)"
          >
          <label
            class="w-auto md:w-52 text-stGreen bg-white py-3.5 my-2 font-medium flex items-center pl-3.5 mappage-route-visibility"
            :for="trail.id">
            <span
              class="circle-route-icon w-4 h-4 mr-4  rounded-full inline-block border-trlYellow"
              :class="trail.acf.colour.value"> </span>
            <span class="route-name hidden md:inline-block">{{ trail.acf.colour.label }} slinga <br>
              <span class="text-sm route-name" >{{ trail.title.rendered }}</span>
            </span>
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
  head:{
    title: 'Upptäck äventyret i vackra Stockamöllan',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Upptäck äventyret i vackra Stockamöllan' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
  },

  data() {
    return {
      // routeDetails: [],
      map:{

      },
      trails:this.$store.getters.getHikingTrails,
      landmarks:this.$store.getters.getLandmarks,
      sagner: this.$store.getters.getStories,
      isDisabled:false


    }
  },

  created(){
  },


  mounted() {
    this.renderMap(this.$config.apiSecret);

    this.trails.forEach(o => this.addMapboxLayer(o));

    this.landmarks.forEach(o => this.addLandmarkPopUps(o));

    this.sagner.forEach(o =>{
        if(o.acf.latitude !== "0" && o.acf.longitude !== "0"){
          console.log(o)
          this.addLandmarkPopUps(o)
        }
    });




  },

  methods:{
    renderMap(apiSecret){
      mapboxgl.accessToken = apiSecret
      this.map = new mapboxgl.Map({
        container: 'map',
        style:'mapbox://styles/ashish64/ckt2pjn1o27yd18nz0okz8p2b',
        zoom:13.5,
        center:[
          13.383094762121942,
          55.95009133934795
        ],
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

    addLandmarkPopUps(landmark){
      this.map.on('load', () =>{
          this.map.addSource(landmark.slug+landmark.id, {
            'type': 'geojson',
            'data':{
              'type': 'FeatureCollection',
              'features': [
                {
                  'type': 'Feature',
                  'properties': {
                    'label': landmark.title.rendered,
                    'description': landmark.acf.kannetecken + '' +
                    '<br>Läs mer om <a href="/'+landmark.type+'/'+landmark.slug +'"><b>' +
                      landmark.title.rendered+
                      '</b></a> här!'  ,
                    'icon': landmark.type === "sevardheter"? 'landmarks':'troll-stories'
                  },
                  'geometry': {
                    'type': 'Point',
                    'coordinates': [landmark.acf.longitude, landmark.acf.latitude]
                  }
                }
                ]
            }
          });
          this.map.addLayer({
            'id': landmark.slug+landmark.id,
            'type': 'symbol',
            'source': landmark.slug+landmark.id,
            'layout': {
              'text-field': ['get', 'label'],
              'text-offset':[0,2.3],
              'icon-image': '{icon}',
              'icon-allow-overlap': true,
              'text-size' : 13,
            }
          });


        this.map.on('click', landmark.slug+landmark.id, (e) => {

          const coordinates = e.features[0].geometry.coordinates.slice();
          const description = e.features[0].properties.description;

          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
          }

         new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(description)
           .addTo(this.map)
        });

        this.map.on('mouseenter', landmark.slug+landmark.id, () => {
          this.map.getCanvas().style.cursor = 'pointer';
        });

        this.map.on('mouseleave', landmark.slug+landmark.id, () => {
          this.map.getCanvas().style.cursor = '';
        });

      })
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
<style>
.mapboxgl-popup {
  max-width: 400px;
  font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;
}
.mapboxgl-popup-close-button{
  padding:2px 5px;
  font-weight: bold;
}
.route-name{
  opacity: 0.8;
}
</style>
