<template>
  <div class="text-center pt-8 font-medium text-sm">
    Hittas på slinga:
    <span class="w-3 h-3 mx-4  rounded-full inline-block" :class="routeDetails.colour.value"></span>
    <span class="text-stBrown text-sm font-medium leading-6">{{ routeDetails.colour.label }}</span>

    <div class="flex mb-5  pt-6 mt-6 justify-center">
      <span class="text-sm font-medium leading-4 flex items-center border-r pr-4">
          <span class="accessibility-icon bg-stBrown distance">
          </span>
        CA {{ routeDetails.distance }}
      </span>
      <ul class="flex">
        <li  v-for="icon in routeDetails.accessibility" :key="icon.id">
          <span class="accessibility-icon bg-stBrown " :class="icon">
          </span>
        </li>
      </ul>
    </div>
  </div>


</template>

<script>
export default {
  props: {
    routeDetails: {
      type: [Object, Array]
    }
  },

  // data(){
  //   return {
  //     routeColours:[],
  //     accessibilities:[]
  //   }
  // },
  // async fetch (){
  //   this.routeDetails = await fetch(
  //     `http://stockamollan.local/wp-json/acf/v3/vandringslederna/${this.vandringslederna}`
  //   ).then(res => res.json())
  // },
  // computed:{
  //   colour() {
  //     return this.routeDetails?.acf?.colour  || ''
  //   },
  //   loopDistance() {
  //     return this.routeDetails?.acf?.distance || ''
  //   },
  //   accessibility() {
  //     return this.routeDetails.acf?.accessibility || ''
  //   }
  // }
}

</script>

<style scoped>

</style>
