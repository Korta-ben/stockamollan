<template>
  <div>
    <div class="flex justify-between bg-stLightGreen py-8 px-7 fixed w-full z-20">
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
          <li v-for="(item, i) in menuItems" :key="i" class="text-right  font-medium text-xl py-2 lg:inline lg:px-2">
            <NuxtLink
              :to="item.slug">
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
    this.menuItems = await fetch('http://stockamollan.local/wp-json/wp/v2/menu')
      .then(res =>
        res.json()
      )
  }

}
</script>

<style>
</style>
