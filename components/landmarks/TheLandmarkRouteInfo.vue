<template>
  <div class="border-b lg:border-0 border-stGreen pt-3">
    <span class="w-4 h-4 mr-4  rounded-full inline-block" :class="vandringslederna.colour.value"> </span>
    <span class="text-stBrown text-xl font-medium leading-6">{{ vandringslederna.colour.label }}</span>
    <div class="flex mb-5  pt-6 mt-6 mb-auto items-center">

        <span class="accessibility-icon distance bg-stBrown lg:bg-stGreen ">
        </span>
      <span class="text-sm text-stGreen  font-medium leading-4">CA {{ vandringslederna.distance }} KM</span>

      <ul class="flex ">
        <li  v-for="icon in vandringslederna.accessibility" :key="icon.id" class="pt-1">
          <span class="accessibility-icon bg-stBrown lg:bg-stGreen " :class="icon">
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    vandringslederna: {
      type: [Object, Array]
    },

  },

}
</script>

<style scoped>

</style>
