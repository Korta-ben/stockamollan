<template>
  <main class="siteMaxWidth contain-offset lg:pb-48 pb-24">
<!--  header index -->
    <section class="header-home">
      <HeaderCard :cardInfo="headerCard"/>
    </section>

<!--    landmark slider-->
    <section class="pb-24 flex flex-col ">
      <h2 class="text-3xl text-center text-stBrown lora font-medium leading-10 mb-11">
        Sevärdheter
      </h2>

      <VueSlickCarousel v-bind="sliderSettings">
<!--        <TheLandmarkSlider v-for="landmark in landmarks" :key="landmark.id"  :landmark="landmark" />-->
        <div class="flex flex-row px-5" v-for="landmark in landmarks"
             :key="landmark.id">
          <div class=" flex  slider-width "  >
            <div class=" bg-center bg-cover bg-top w-1/3 rounded-l-xl object-cover bg-no-repeat"  v-bind:style="{
              'background-image':
            'url(' +
    landmark.acf.header_image + ')'
    }" >
<!--              <img :src="landmark.acf.header_image" class="object-cover  ">-->
            </div>
            <div class="py-7 px-6 w-2/3  bg-stLightGreen	rounded-r-xl">
              <h2 v-html="landmark.title.rendered" class="pb-5 text-lg font-semibold break-words"></h2>
              <p v-html="landmark.acf.kannetecken" class=" text-sm h-20 overflow-hidden"></p>

              <NuxtLink :to="{ name: 'sevardheter-slug', params: { slug: landmark.slug } }"
                        class="flex justify-items-start justify-items-start text-sm font-semibold text-stGreen pt-7">
                <span  class="bg-stGreen tipIcon  inline-block  w-5 h-5 mr-1.5 "> </span>
                LÄS MER
              </NuxtLink>
            </div>
          </div>

        </div>
      </VueSlickCarousel>

      <NuxtLink
        to="/sevardheter"
        class=" w-48 font-semibold self-center text-lg text-stGreen mt-10 border-2 border-stGreen text-center py-4">
        Visa alla
      </NuxtLink >
    </section>
  <!-- Route Block appears here -->
    <section class="lg:container-width ">
      <h2 class="text-3xl text-center text-stBrown lora font-medium leading-10 mb-11">
        Vandringslederna
      </h2>
        <Vandringslederna />
    </section>

<!--    section for tips  -->
    <section v-bind:style="{ 'background-image': 'url(' +
    tipCard.image + ')'
    }" class="bg-no-repeat  bg-cover mt-10 mb-2">
      <TheTipsBlock :tipCard="tipCard" />
    </section>
<!--    section for hitta hit-->
        <TheHittaHit :hittaHitCard="hittaHitCard"/>
  </main>
</template>

<script>

import axios from "axios";

import 'vue-slick-carousel/dist/vue-slick-carousel.css'
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

  data() {
    return {
      landmarks: this.$store.getters.getLandmarks,
      sliderSettings: [
        {

          "dots": false,
          "infinite": true,
          "speed": 500,
          "slidesToShow": 4,
          "slidesToScroll": 1,
          "initialSlide": 0,
          "arrows":true,
          "responsive": [

            {
              "breakpoint": 375,
              "settings": {
                "slidesToShow": 1,
                "slidesToScroll": 1
              }
            },
            {
              "breakpoint": 480,
              "settings": {
                "slidesToShow": 1,
                "slidesToScroll": 1
              }
            },
            {
              "breakpoint": 640,
              "settings": {
                "centerMode": true,
                "slidesToShow": 1,
                "slidesToScroll": 1
              }
            },
            {
              "breakpoint": 768,
              "settings": {
                "centerMode": true,
                "slidesToShow": 1,
                "slidesToScroll": 1
              }
            },
            {
              "breakpoint": 855,
              "settings": {
                "centerMode": false,
                "slidesToShow": 2,
                "slidesToScroll": 1
              }
            },
            {
              "breakpoint": 1024,
              "settings": {
                "centerMode": true,
                "slidesToShow": 2,
                "slidesToScroll": 1
              }
            },
            {
              "breakpoint": 1280,
              "settings": {
                "centerMode": true,
                "slidesToShow": 2,
                "slidesToScroll": 1
              }
            },
            {
              "breakpoint": 1536,
              "settings": {
                "centerMode": true,
                "slidesToShow": 3,
                "slidesToScroll": 1

              }
            },
          ]
        }

    ]
    }
  },

  async asyncData() {
    const { data } = await axios.get(
      `https://api.stockamollan.guide/wp-json/wp/v2/pages/53`
    )

    let card = data.acf.card



    return {
      headerCard : card.filter(o => o.card_type == "HeaderCard")[0],
      tipCard: card.filter(o => o.card_type == "TipsCard")[0],
      hittaHitCard: card.filter(o => o.card_type == "HittaHitCard")[0],
      page: data
    }

  },



}
</script>
