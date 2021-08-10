<template>
  <main class="siteMaxWidth xl:px-36 lg:px-28 ">
    <TheSagnerHeader class="page-top-padding pb-16" :pageHeader="pageHeader"/>
    <ContentBox v-for="blocks in contentBoxStuff" :key="blocks.id" :contentBoxData="blocks"/>
  </main>
</template>
<script>

import axios from "axios";
export default {

  async asyncData ({ params }) {
    const { data } = await axios.get(
      `http://stockamollan.local/wp-json/wp/v2/sagner?slug=${params.slug}`
    )
    console.log(data)
    return { data }
  },

  computed: {
    pageHeader(){
      return {
        title: this.data[0].title.rendered,
        intro: this.data[0].acf.kannetecken,
        vandringslederna: this.data[0].acf.vandringslederna,
        header_image: this.data[0].acf.header_image
      }
    },
    contentBoxStuff(){
      return this.data[0].acf.content_blocks
    }
  }




}
</script>
