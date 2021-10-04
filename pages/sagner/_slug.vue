<template>
  <main class="siteMaxWidth xl:px-36 lg:px-28 pb-48">
    <TheSagnerHeader class="page-top-padding pb-16" :pageHeader="pageHeader"/>
    <ContentBox v-for="blocks in contentBoxStuff" :key="blocks.id" :contentBoxData="blocks"/>
  </main>
</template>
<script>

import axios from "axios";
export default {

  head() {
    if(this.page) {
      const metaArray = [];
      this.page.yoast_meta.map(ele => {
        metaArray.push({
          hid: ele.name ? ele.name : ele.property,
          name: ele.name ? ele.name : ele.property,
          content: ele.content,
        });
      });

      return {
        title: this.page.yoast_title,
        meta: metaArray,
      }
    }
  },

  async asyncData ({ params }) {
    const { data } = await axios.get(
      `https://api.stockamollan.guide/wp-json/wp/v2/sagner?slug=${params.slug}`
    )

    return { data }
  },

  computed: {
    pageHeader(){
      return {
        title: this.data[0].title.rendered,
        intro: this.data[0].acf.kannetecken,
        vandringslederna: this.data[0].acf.vandringslederna,
        header_image: this.data[0].acf.header_image,
        introduction: this.data[0].acf.introduktion,

      }
    },
    contentBoxStuff(){
      return this.data[0].acf.content_blocks
    },
    page(){
      return this.data[0]
    }
  }




}
</script>
