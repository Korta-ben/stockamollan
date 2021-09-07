<template>
  <main class="pt-48 siteMaxWidth xl:px-36 lg:px-28 ">
    <h1 class=" lora font-medium text-3xl text-center px-12 pb-6">Sägner</h1>
    <p class="px-7 text-center text-sm max-w-2xl m-auto pb-10">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
    </p>
    <section class="p-7 flex  items-center flex-col md:flex-row md:justify-evenly md:flex-wrap">
        <TheSangerCard v-for="story in stories" :key="story.id" :story="story" class="hover:shadow-2xl transition"/>
    </section>
  </main>


</template>
<script>


export default {
  data(){
    return {
        stories:this.$store.getters.getStories,
    }
  },

}
</script>
