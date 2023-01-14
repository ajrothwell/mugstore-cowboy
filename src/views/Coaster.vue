<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title">
          {{ currentCoaster.fields.name }} Coaster
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
    coastersData() {
      return this.$store.state.sources.coasters.data;
    },
    currentCoaster() {
      let coaster = this.coastersData.filter(coaster => coaster.fields.id == this.$route.params.coasterId)[0];
      console.log('currentCoaster computed, coaster:', coaster, 'this.coastersData:', this.coastersData, 'this.$route.params.coasterId:', this.$route.params.coasterId);
      return coaster;
    },
  },
};

</script>

<style>
/* @import 'bulma/css/bulma.css'; */

.columns {
  flex-wrap: wrap;
}

</style>