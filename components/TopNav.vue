<template>
  <div class="fixed  w-full h-auto z-30">
    <div class=" bg-stLightGreen  py-6   make-it-blur">
      <div class="flex justify-between  px-7 md:container-width z-20">
        <div class="font-bold text-stCream uppercase text-xl leading-6">

          <div class="half-circle fixed md:bg-stGreen bg-transparent ">
            <NuxtLink to="/" >
                            <img src="~/assets/images/logo.svg" alt="STOCKAMÖLLAN" class="site-logo ease-in-out sm:w-12 z-40">
            </NuxtLink>
          </div>

        </div>
        <nav class="flex flex-col ">
          <div  class=" inline text-stCream  lg:hidden flex flex-row justify-end items-center">


              <NuxtLink to="/vandringsleder/map" class="flex pushable ">
                  <span  class="accessibility-icon  map-alternative bg-stCream ">

                  </span>Karta
              </NuxtLink>




            <div @click="showMenu = !showMenu"
                 for="menu-toggle">
              <div class="inline lg:hidden flex flex-col place-content-center pl-9">
                <div class="navicon navico1 ml-auto bg-stCream z-10" :class="{'toggle-top' : !showMenu}"/>
                <div :class="[ !showMenu ? 'bg-stGreen z-0' : 'bg-stCream'] " class="navicon navico2 ml-auto "  />
                <div class="navicon navico3 ml-auto bg-stCream z-10"  :class="{'toggle-bottom' : !showMenu}"/>
              </div>

<!--              <input id="menu-toggle" @focus="showMenu = !showMenu" type="checkbox"  :checked="{checked : showMenu}">-->
                <ul :class="{hidden : showMenu}"   class="animate-fade-in-down absolute p-4 right-6 bg-stGreen"
                >
                  <li v-for="(item, i) in menuItems" :key="i"
                      class="align-top text-right  font-semibold text-lg text-stCream py-2 lg:inline lg:px-2">
                    <NuxtLink
                      :to="{name:item.slug}">
                      {{ item.title }}
                    </NuxtLink>
                  </li>
                </ul>
            </div>


          </div>




          <ul  class="animate-fade-in-down lg:flex items-center hidden gap-x-3.5"
              >
            <li v-for="(item, i) in menuItems" :key="i"
                class="align-top text-right  font-semibold text-lg text-stCream lg:inline lg:px-2">
              <NuxtLink
                :to="{name:item.slug}">
                {{ item.title }}
              </NuxtLink>
            </li>
            <li  class="align-top text-right  font-semibold text-lg text-stCream lg:inline lg:px-2 hidden">

                <NuxtLink to="/vandringsleder/map" class="flex pushable">
                  <span  class="accessibility-icon  map-alternative bg-stCream ">

                  </span>Karta
              </NuxtLink>


            </li>
          </ul>
        </nav>
      </div>



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
