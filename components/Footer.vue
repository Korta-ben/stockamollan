<template>
  <footer class="bg-stGreen px-12 py-20 ">
    <div class="flex flex-col lg:flex-row gap-4 lg-flex-wrap justify-center items-center lg:items-start  siteMaxWidth">
      <div class="lg:w-1/5 max-w-xs lg:order-2" >
        <img :src="logo.logo" class="m-auto">
      </div>

      <div class="text-center  text-stCream mt-20 lg:mt-0 lg:w-2/5 lg:text-left max-w-xs lg:order-1">
        <h2 v-html="info.title" class="text-3xl leading-9 font-medium pb-3"></h2>
        <div v-html="info.info_text"></div>
      </div>

      <div class="text-center text-stCream mt-20 lg:mt-0 lg:w-2/5 lg:text-left max-w-xs lg:order-3">
        <h2 v-html="social.title" class="text-3xl leading-9 font-medium pb-3"></h2>
        <div v-html="social.paragraph"></div>
        <ul>
          <li class="inline-flex py-16 mx-2.5"  v-for="sm in social.facebook" >
            <a :href="sm.url">
              <img :src="sm.icon">
            </a>
          </li>
        </ul>
      </div>
    </div>

  </footer>
</template>
<script>
import axios from "axios";

export default {
  data () {
    return {
      logo:[],
      info:[],
      social:[]

    }
  },
  async fetch () {
    const { data } = await axios.get(`https://api.stockamollan.guide/wp-json/wp/v2/layout_settings/22`)
    this.logo = data.acf.new_footer.filter(o => o.acf_fc_layout === "logo")[0];
    this.info = data.acf.new_footer.filter(o => o.acf_fc_layout === "footer_card")[0];
    this.social = data.acf.new_footer.filter(o => o.acf_fc_layout === "social_media")[0];
    // this.
  },
}
</script>
