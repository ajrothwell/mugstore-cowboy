<template>
  <div>
    <section>
      <div class="container">

        <div class="columns">
          <div
            v-for="mug in mugsPreview"
            :key="mug.id"
            class="column is-4"
          >
            <router-link
              :to="'/mug/'+mug.fields.id"
            >
              <div class="item-title has-text-centered">
                {{ mug.fields.name }}
              </div>
              <photo
                :item="mug.fields"
              >
              </photo>
              <!-- </div> -->

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
    mugsPreview() {
      // console.log('mugsPreview computed, this.$store.state.sources.mugs.data:', this.$store.state.sources.mugs.data);
      return this.$store.state.sources.mugs.data;
    },
  },
};

</script>

<style>

/* .columns {
  flex-wrap: wrap;
} */

</style>