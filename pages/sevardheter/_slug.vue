<template>
  <main class="siteMaxWidth">
    <LandmarkHeader class="pb-16" :pageData="data[0]" />
    <ContentBox v-for="blocks in contentBoxStuff" :key="blocks.id" :contentBoxData="blocks" class="xl:px-36 lg:px-28 "/>
  </main>
</template>
<script>
import axios from "axios";


export default {

  async asyncData ({ params }) {
    const { data } = await axios.get(
      `https://fricks.kortaben.work/wp-json/wp/v2/sevardheter?slug=${params.slug}`
    )
    return { data }
  },

  computed: {
    contentBoxStuff(){
      return this.data[0].acf.content_blocks
    },

  }




}
</script>
