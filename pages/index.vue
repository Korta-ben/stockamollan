<template>
  <main>
<!--  header index -->
    <section class="header-home">
      <HeaderCard :cardInfo="headerCard"/>
    </section>

  <!-- Route Block appears here -->
    <section>
      <Vandringslederna />
    </section>

<!--    section for tips  -->
    <section v-bind:style="{ 'background-image': 'url(' +
    tipCard.image + ')'
    }" class="bg-no-repeat bg-center bg-cover mt-10 mb-2">
      <TheTipsBlock :tipCard="tipCard" />
    </section>

<!--    hitta hit -->
    <section class="mt-20">
        <TheHittaHit :hittaHitCard="hittaHitCard"/>
    </section>
  </main>
</template>

<script>

import axios from "axios";
import TheTipsBlock from "../components/blocks/TheTipsBlock";
import TheHittaHit from "../components/blocks/TheHittaHit";


export default {
  components: {TheHittaHit, TheTipsBlock},
  async asyncData() {
    const { data } = await axios.get(
      `http://stockamollan.local/wp-json/wp/v2/pages/53`
    )

    let card = data.acf.card

    return {
      headerCard : card.filter(o => o.card_type == "HeaderCard")[0],
      tipCard: card.filter(o => o.card_type == "TipsCard")[0],
      hittaHitCard: card.filter(o => o.card_type == "HittaHitCard")[0]
    }

    // console.log(HeaderCard)

  },


}
</script>
