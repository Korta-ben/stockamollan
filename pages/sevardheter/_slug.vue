<template>
  <main class="siteMaxWidth pt-20 pb-48">
    <LandmarkHeader class="pb-16" :pageData="data[0]" />
    <ContentBox v-for="blocks in contentBoxStuff" :key="blocks.id" :contentBoxData="blocks" class="xl:px-36 lg:px-28 "/>
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

  // to be optimized, get the data from store not with api calls
  async asyncData ({ params }) {
    const { data } = await axios.get(
      `https://api.stockamollan.guide/wp-json/wp/v2/sevardheter?slug=${params.slug}`
    )
    return { data }
  },

  computed: {
    contentBoxStuff(){
      return this.data[0].acf.content_blocks
    },
    page(){
      return this.data[0]
    }

  }




}
</script>
