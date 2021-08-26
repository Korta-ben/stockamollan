<template>
  <div class=" w-full h-auto bg-stLightGreen  py-8 ">
    <div class="flex justify-between  px-7 siteMaxWidth z-20">
      <div class="font-bold text-stBrown uppercase text-xl leading-6">
        <NuxtLink to="/">Stockamöllan</NuxtLink>
      </div>
      <nav class="flex flex-col">
        <div
          class="lg:hidden"
          @click="showMenu = !showMenu"
        >
          <div class="navicon navico1 ml-auto" />
          <div class="navicon navico2 ml-auto" />
          <div class="navicon navico3 ml-auto" />
        </div>
        <ul :class="{hidden : showMenu}" class="animate-fade-in-down lg:block">
          <li v-for="(item, i) in menuItems" :key="i" class="text-right  font-medium text-lg text-stGreen py-2 lg:inline lg:px-2">
            <NuxtLink
              :to="{name:item.slug}">
              {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
    <div class="maplink lg:hidden">
    </div>
  </div>

</template>

<script>

export default {
  data () {
    return {
      menuItems: null,
      showMenu: true
    }
  },
  async fetch () {
    this.menuItems = await fetch('https://api.stockamollan.guide/wp-json/wp/v2/menu')
      .then(res =>
        res.json()
      )
  }

}
</script>

<style>
</style>
