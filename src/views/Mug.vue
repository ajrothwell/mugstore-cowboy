<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title">
          {{ currentMug.fields.name }} Mug
        </h1>
      </div>
    </section>

    <section>
      <div class="container">
        <!-- <p class="subtitle">
          Mugs
        </p> -->
        <!-- <div class="columns">
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

          </div>
        </div> -->
        <div class="holder">
          <photo-carousel
            :item="currentMug"
          >
          </photo-carousel>
        </div>
      </div>
    </section>

  </div>

</template>

<script>

import PhotoCarousel from '@/components/PhotoCarousel.vue';
// import Photo from '@/components/Photo.vue';

export default {
  name: 'Home',
  components: {
    // Photo,
    PhotoCarousel,
  },
  // data() {
  //   return {
  //     sources: {
  //       mugs: [],
  //     },
  //   };
  // },
  computed: {
    mugsData() {
      return this.$store.state.sources.mugs.data;
    },
    currentMug() {
      let mug = this.mugsData.filter(mug => mug.fields.id == this.$route.params.mugId)[0];
      console.log('currentMug computed, mug:', mug, 'this.mugsData:', this.mugsData, 'this.$route.params.mugId:', this.$route.params.mugId);
      return mug;
    },
  },
};

</script>

<style>
/* @import 'bulma/css/bulma.css'; */

.columns {
  flex-wrap: wrap;
}

.holder {
  width: 600px;
  /* height: 400px; */
}

</style>