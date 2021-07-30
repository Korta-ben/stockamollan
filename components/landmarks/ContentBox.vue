<template>
  <section>
    <div class="grid grid-cols-1 md:grid-cols-2 px-7 pb-12">
      <div>
        <h2 class="font-medium text-xl leading-6 pb-5" v-html="contentBoxData.heading"></h2>
        <p v-html="contentBoxData.content" class="text-sm leading-5 leading-5 pb-12">

        </p>
      </div>
      <div>
        <vue-masonry-wall :items="items" :options="options"  >
          <template v-slot:default="{item}" class="">
            <div class="item">

              <img :src="item.Select"  class="w-full " >
            </div>
          </template>
        </vue-masonry-wall>
      </div>

<!--      <div class="pb-12 grid grid-cols-2 gap-2">-->
<!--        <div v-for="gridMedia in contentBoxData.media" :key="gridMedia.id" :class="gridMedia.info"-->
<!--             class="">-->
<!--          <img :src="gridMedia.Select"  class="w-full " >-->
<!--        </div>-->
<!--      </div>-->

    </div>
  </section>

</template>

<script>
import VueMasonryWall from "vue-masonry-wall";
export default {
  components: {VueMasonryWall},

  props: {
    contentBoxData: {
      type: [Object, Array]
    },
  },

  data () {
    return{
      options: {
        width: 320,
        padding: {
          default: 6,
          1: 1
        },
      },
      items: this.contentBoxData.media
    }
  }

}
</script>

<style scoped>

</style>
