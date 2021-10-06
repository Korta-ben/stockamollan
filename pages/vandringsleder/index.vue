<template>
  <main class="py-48 siteMaxWidth xl:px-36 lg:px-28 ">
    <section>
      <h2 class="text-3xl text-center text-stBrown lora font-medium leading-10 mb-11">
        Vandringslederna
      </h2>
      <p class="px-7 text-center text-sm max-w-2xl m-auto pb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
      </p>
      <Vandringslederna />
    </section>
  </main>


</template>
<script>

export default {

  head() {
    return {
      title: "Vandringslederna",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Vandringslederna'
        }
      ]
    }
  },




}
</script>
