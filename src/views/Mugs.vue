<template>
  <!-- <div> -->
    <section>
      <div class="container">

        <div class="columns">
          <div
            v-for="mug in mugsPreview"
            :key="mug.id"
            class="column is-4-desktop is-6-tablet"
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

            </router-link>
          </div>
        </div>
      </div>
    </section>

  <!-- </div> -->

</template>

<script>

import Photo from '@/components/Photo.vue';

export default {
  name: 'Mugs',
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
