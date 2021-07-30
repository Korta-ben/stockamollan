<template>
  <div>
<!--    <img :src="media" >-->
    {{ media }}
  </div>
</template>

<script>
export default {

  props: {
    contentBoxData: {
      media: [Object, Array]
    },
  },

}
</script>

<style scoped>

</style>
