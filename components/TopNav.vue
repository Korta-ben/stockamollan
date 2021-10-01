<template>
  <div class="fixed  w-full h-auto z-30">
    <div class=" bg-stLightGreen  py-8   make-it-blur">
      <div class="flex justify-between  px-7 container-width z-20">
        <div class="font-bold text-stCream uppercase text-xl leading-6">

          <NuxtLink to="/" class="fixed">

            <span class="lg:hidden">Stockamöllan</span>
          </NuxtLink>
        </div>
        <nav class="flex flex-col ">
          <div  class=" inline text-stCream  lg:hidden flex flex-row justify-end">
            <NuxtLink to="/vandringsleder/map" class="accessibility-icon  map bg-stCream ">

            </NuxtLink>



            <div
              class="inline lg:hidden flex flex-col place-content-center pl-9"
              @click="showMenu = !showMenu"
            >
              <div class="navicon navico1 ml-auto" />
              <div class="navicon navico2 ml-auto" />
              <div class="navicon navico3 ml-auto" />
            </div>

          </div>


          <ul :class="{hidden : showMenu}" class="animate-fade-in-down lg:block">
            <li v-for="(item, i) in menuItems" :key="i"
                class="align-top text-right  font-semibold text-lg text-stCream py-2 lg:inline lg:px-2">
              <NuxtLink
                :to="{name:item.slug}">
                {{ item.title }}
              </NuxtLink>
            </li>
            <li  class="align-top text-right  font-semibold text-lg text-stCream py-2 lg:inline lg:px-2 hidden">
              <NuxtLink to="/vandringsleder/map" class="accessibility-icon  map bg-stCream ">

              </NuxtLink>

            </li>
          </ul>
        </nav>
      </div>



    </div>
    <div class="siteMaxWidth pl-12 overflow-hidden hidden lg:block">
      <div class="half-circle   make-it-blur ">
      </div>
      <NuxtLink to="/" class="fixed">
      <img src="~/assets/images/logo.svg" alt="STOCKAMÖLLAN" class="site-logo fixed  z-40">
        </NuxtLink>
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
