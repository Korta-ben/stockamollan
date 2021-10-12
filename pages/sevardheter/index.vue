<template>
  <main class="py-48 siteMaxWidth xl:px-36 lg:px-28 mb-48">
    <h1 class=" lora font-medium text-3xl text-center px-12 pb-4">Sevärdheter i Stockamöllan</h1>
    <div class="max-w-2xl mx-auto text-center px-5">
      <p>
        Stockamöllan är rik på både kultur och historia. Kungligheter, arbetare och snapphanar har varit en del av platsen i flera hundra år. Här finns en lista över sevärdheter i och i närheten av Stockamöllan. Både längs med vandringslederna och strax utanför.      </p>
      <h3 class="text-stGreen text-base font-bold leading-6 pt-11 pb-8">FILTRERA:</h3>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <button v-for="trail in trails" :key="trail.index"
                class="border-2 border-stGreen text-stGreen font-semibold text-lg leading-7 py-4 focus:bg-stGreen focus:text-stCream"
                @click="filterLandmakrs(trail.id)"
        >

           <span
             class="circle-route-icon w-4 h-4 mr-4  rounded-full inline-block border-trlYellow"
             :class="trail.acf.colour.value"> </span>{{ trail.acf.colour.label }} slinga
        </button>

        <button
          class="md:col-span-3 sm:col-span-2  text-stGreen font-semibold text-lg leading-7 pt-4 pb-8"
                @click="allLandmarks"
        >
          Visa allt
        </button>
      </div>
    </div>




    <section class="p-7 lg:py-7 ">
      <h1 v-if="!landmarks.length" class="text-center">Sorry, No landmarks here!</h1>
      <TheLandmarkCard v-for="landmark in landmarks" :key="landmark.id" :landmark="landmark"
                       class="mb-7  rounded-xl hover:shadow-2xl transition "/>
    </section>
  </main>


</template>
<script>

export default {
  head() {
    return {
      title: "Sevärdheter i Stockamöllan",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Sevärdheter i Stockamöllan'
        }
      ]
    }
  },
  data() {
    return {
      landmarks:this.$store.getters.getLandmarks,
      trails: this.$store.getters.getHikingTrails,

    }
  },

  methods:{
    filterLandmakrs(trailId){
      //get the one that appear in trail
      let onTheTrail = this.$store.getters.getLandmarks.filter(o => o.acf.vandringslederna)
      // filter the above against trailID
      this.landmarks = onTheTrail.filter( l =>
         l.acf.vandringslederna.filter( v => v.ID == trailId).pop()
      )
    },
    allLandmarks(){
      this.landmarks = this.$store.getters.getLandmarks
    }
  }



}
</script>
