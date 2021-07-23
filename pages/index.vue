<template>
  <main>
<!--  header index -->
    <section class="header-home">
      <HeaderCard :cardInfo="headerCard"/>
    </section>

  <!--  -->
    <section>
      <Vandringslederna />
    </section>
  </main>
</template>

<script>

import axios from "axios";


export default {

  async asyncData () {
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
