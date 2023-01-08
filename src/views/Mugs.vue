<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title">
          Mugstore Cowboy Mugs
        </h1>
      </div>
    </section>

    <section>
      <div class="container">
        <p class="subtitle">
          Mugs
        </p>
        <div class="columns">
          <div
            v-for="mug in mugsPreview"
            :key="mug.id"
            class="column is-3"
          >
            {{ mug.fields.name }}
            <photo
              :item="mug.fields"
            >
            </photo>
            <!-- <img :src="imgsrc"></img> -->

          </div>
        </div>
      </div>
    </section>

  </div>

</template>

<script>

// import PhotoCarousel from '@/components/PhotoCarousel.vue';
import Photo from '@/components/Photo.vue';

export default {
  name: 'Home',
  components: {
    Photo,
    // PhotoCarousel,
  },
  // data() {
  //   return {
  //     sources: {
  //       mugs: [],
  //     },
  //   };
  // },
  computed: {
    mugsPreview() {
      // console.log('mugsPreview computed, this.$store.state.sources.mugs.data:', this.$store.state.sources.mugs.data);
      return this.$store.state.sources.mugs.data;
    },
    // coastersPreview() {
    //   return this.$store.state.sources.coasters.data.slice(0, 3);
    // },
  },
};

</script>

<style>
/* @import 'bulma/css/bulma.css'; */

.columns {
  flex-wrap: wrap;
}

</style>