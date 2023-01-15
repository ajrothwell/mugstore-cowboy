<template>
  <!-- <div> -->
    <section>
      <div class="container">

        <div class="columns">
          <div
            v-for="coaster in coastersPreview"
            :key="coaster.id"
            class="column is-4"
          >
            <router-link
              :to="'/coaster/'+coaster.fields.id"
            >
              <div class="item-title has-text-centered">
                {{ coaster.fields.name }}
              </div>
              <photo
                :item="coaster.fields"
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
  name: 'Coasters',
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