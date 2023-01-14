<template>
  <div>
    <section>
      <div class="container has-text-centered">
        <h2 class="item-name">
          {{ currentMug.fields.name }} Mug
        </h2>

        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <photo-carousel
              :item="currentMug"
            >
            </photo-carousel>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import PhotoCarousel from '@/components/PhotoCarousel.vue';

export default {
  name: 'Home',
  components: {
    PhotoCarousel,
  },
  computed: {
    mugsData() {
      return this.$store.state.sources.mugs.data;
    },
    currentMug() {
      let mug = this.mugsData.filter(mug => mug.fields.id == this.$route.params.mugId)[0];
      // console.log('currentMug computed, mug:', mug, 'this.mugsData:', this.mugsData, 'this.$route.params.mugId:', this.$route.params.mugId);
      return mug;
    },
  },
};

</script>