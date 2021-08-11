<template>
  <main class="pt-48 siteMaxWidth xl:px-36 lg:px-28 ">
    <h1 class=" lora font-medium text-3xl text-center px-12 pb-14">Sevärheterna i Stockamöllan</h1>

    <section class="p-7 lg:py-7">
      <TheLandmarkCard v-for="landmark in landmarks" :key="landmark.id" :landmark="landmark"
                       class="mb-7 rounded-xl hover:shadow-2xl transition"/>
    </section>
  </main>


</template>
<script>

export default {
  data() {
    return {
      landmarks:this.$store.getters.getLandmarks,
    }
  }

}
</script>
