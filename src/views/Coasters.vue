<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title">
          Mugstore Cowboy Coasters
        </h1>
      </div>
    </section>

    <section>
      <div class="container">
        <p class="subtitle">
          Coasters
        </p>
        <div class="columns">
          <div
            v-for="coaster in coastersPreview"
            :key="coaster.id"
            class="column is-3"
          >
            <router-link
              :to="'/coaster/'+coaster.fields.id"
            >
              {{ coaster.fields.name }}
              <photo
                :item="coaster.fields"
              >
              </photo>
            </router-link>
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
  computed: {
    coastersPreview() {
      return this.$store.state.sources.coasters.data.slice(0, 3);
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