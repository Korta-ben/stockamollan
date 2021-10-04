<template>
  <section>
    <div class="grid grid-cols-1 md:grid-cols-2 px-7 pb-12 overflow-hidden">
      <div>
        <h2 class="font-medium text-xl leading-6 pb-5" v-html="contentBoxData.heading"></h2>
        <div v-html="contentBoxData.content" class="text-sm leading-5  pb-12 pr-8"></div>
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
