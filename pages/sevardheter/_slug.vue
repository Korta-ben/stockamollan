<template>
  <main>
    <LandmarkHeader class="page-top-padding pb-16" :pageData="data[0]" />
    <ContentBox v-for="blocks in contentBoxStuff" :key="blocks.id" :contentBoxData="blocks"/>
  </main>
</template>
<script>
// `http://stockamollan.local/wp-json/wp/v2/sevardheter?slug=${params.slug}`
import axios from "axios";


export default {

  async asyncData ({ params }) {
    const { data } = await axios.get(
      `http://stockamollan.local/wp-json/wp/v2/sevardheter?slug=stenbocksstenen`
    )
    // console.log( data[0].acf.vandringslederna )
    // const { routeDetails }  = await axios.get(`http://stockamollan.local/wp-json/wp/v2/sevardheter/121`)
    // console.log(routeDetails)
    return { data }
  },

  computed: {
    contentBoxStuff(){
      return this.data[0].acf.content_blocks
    }
  }




}
</script>
