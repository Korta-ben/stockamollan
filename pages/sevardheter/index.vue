<template>
  <main class="py-48 siteMaxWidth xl:px-36 lg:px-28 mb-48">
    <h1 class=" lora font-medium text-3xl text-center px-12 pb-4">Sevärheterna i Stockamöllan</h1>
    <div class="max-w-2xl mx-auto text-center px-5">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
      </p>
      <h3 class="text-stGreen text-base font-bold leading-6 pt-11 pb-8">FILTRERA:</h3>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <button v-for="trail in trails" :key="trail.index"
                class="border-2 border-stGreen text-stGreen font-semibold text-lg leading-7 py-4 focus:bg-stGreen focus:text-stCream"
                @click="filterLandmakrs(trail.id)"
        >

          {{ trail.acf.colour.label }} slinga
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
      title: "Sevärheterna i Stockamöllan",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Sevärheterna i Stockamöllan'
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
