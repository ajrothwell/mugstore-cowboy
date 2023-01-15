<template>
  <!-- <div> -->
    <section>
      <div class="container has-text-centered">
        <h2 class="item-name">
          {{ currentCoaster.fields.name }} Coaster
        </h2>
        <div class="columns">
          <div class="column is-8 is-offset-2">
            <photo-carousel
              :item="currentCoaster"
            >
            </photo-carousel>
          </div>
        </div>
      </div>
    </section>
  <!-- </div> -->
</template>

<script>

import PhotoCarousel from '@/components/PhotoCarousel.vue';

export default {
  name: 'Coaster',
  components: {
    PhotoCarousel,
  },
  computed: {
    coastersData() {
      return this.$store.state.sources.coasters.data;
    },
    currentCoaster() {
      let coaster = this.coastersData.filter(coaster => coaster.fields.id == this.$route.params.coasterId)[0];
      // console.log('currentCoaster computed, coaster:', coaster, 'this.coastersData:', this.coastersData, 'this.$route.params.coasterId:', this.$route.params.coasterId);
      return coaster;
    },
  },
};

</script>