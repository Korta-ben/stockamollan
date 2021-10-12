<template>
  <main class="py-48 siteMaxWidth xl:px-36 lg:px-28 ">
    <section>
      <h2 class="text-3xl text-center text-stBrown lora font-medium leading-10 mb-11">
        Vandringsleder
      </h2>
      <p class="px-7 text-center text-sm max-w-2xl m-auto pb-10">
        Stockamöllan finns det sex vandringsleder som leder dig genom ett stort utbud av kultur och historia.
        Det finns även en sägensvandring för de som vill lära känna Stockamöllan på ett nytt sätt.      </p>
      <Vandringslederna />
    </section>
  </main>


</template>
<script>

export default {

  head() {
    return {
      title: "Vandringsleder",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Vandringsleder'
        }
      ]
    }
  },




}
</script>
