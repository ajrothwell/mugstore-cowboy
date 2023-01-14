<template>
  <div>
    <section>
      <div class="container">

        <div class="columns">
          <div
            v-for="coaster in coastersPreview"
            :key="coaster.id"
            class="column is-3"
          >
            <router-link
              :to="'/coaster/'+coaster.fields.id"
            >
              <div class="has-text-centered">
                {{ coaster.fields.name }}
                <photo
                  :item="coaster.fields"
                >
                </photo>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import Photo from '@/components/Photo.vue';

export default {
  name: 'Home',
  components: {
    Photo,
  },
  computed: {
    coastersPreview() {
      return this.$store.state.sources.coasters.data;
    },
  },
};

</script>

<style>

/* .columns {
  flex-wrap: wrap;
} */

</style>