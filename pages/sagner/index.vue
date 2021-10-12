<template>
  <main class="py-48 siteMaxWidth xl:px-36 lg:px-28 ">
    <h1 class=" lora font-medium text-3xl text-center px-12 pb-6">Sägner</h1>
    <p class="px-7 text-center text-sm max-w-2xl m-auto pb-10">
      Var det verkligen Magnus Stenbock som såg till att Stenbocksstenen restes? Varför regnar det aldrig in på Stättan
      och vad är egentligen historien bakom gatlampan på Torget? Besök Stockamöllan med nya ögon och kliv in i värld av
      älvor, troll, vättar och andra väsen.    </p>
    <section class="p-7 flex  items-center flex-col md:flex-row md:justify-evenly md:flex-wrap">
        <TheSangerCard v-for="story in stories" :key="story.id" :story="story" class="hover:shadow-2xl transition"/>
    </section>
  </main>


</template>
<script>


export default {
  head() {
    return {
      title: "Sägner",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Sägner'
        }
      ]
    }
  },

  data(){
    return {
        stories:this.$store.getters.getStories,
    }
  },

}
</script>
