<template>
  <footer class="bg-stGreen px-12 py-20">
    <div>
      <img src="~/assets/images/logo.png" class="m-auto">
    </div>
    <div v-for="item in footer" :key="item.id" class="text-center text-stCream mt-20" >
      <h2 v-html="item.title" class="text-3xl leading-9 font-medium pb-3"></h2>
      <div v-html="item.body">
      </div>
      <ul>
        <li class="inline-flex py-16 mx-2.5"  v-for="social in item.social_media" >
          <a :href="social.url">
            <img :src="social.icon">
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>
<script>
import axios from "axios";

export default {
  data () {
    return {
      footer:[]
    }
  },
  async fetch () {
    const { data } = await axios.get(`https://api.stockamollan.guide/wp-json/wp/v2/layout_settings/22`)
    this.footer = data.acf.footer
  },
}
</script>
