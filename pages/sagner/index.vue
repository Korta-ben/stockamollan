<template>
  <main class="pt-48">
    <h1 class=" lora font-medium text-3xl text-center px-12 pb-14">Sägner</h1>
    <p class="px-7 text-center text-sm">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
    </p>
    <section class="p-7 flex  items-center flex-col">
        <TheSangerCard v-for="story in stories" :key="story.id" :story="story" class="hover:shadow-2xl transition"/>
    </section>
  </main>


</template>
<script>

import axios from "axios";

export default {

  async asyncData ({ params }) {
    const { data } = await axios.get(
      `http://stockamollan.local/wp-json/wp/v2/sagner`
    )
    let stories = data
    return { stories }
  }
}
</script>
