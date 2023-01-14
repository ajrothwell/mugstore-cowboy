<template>
  <!-- <div> -->
    <section>
      <div class="container">

        <div class="columns">

          <div class="column is-6 has-text-centered">

            <router-link
              to="/mugs"
            >
              <div class="section-title">
                Mugs
              </div>
              
              <div class="columns">
                <div
                  v-for="mug in mugsPreview"
                  :key="mug.id"
                  class="column is-10 is-offset-1 home-photo"
                >
                  <photo
                    :item="mug.fields"
                  >
                  </photo>
                  
                </div>
              </div>
            </router-link>
          </div>

          <div class="column is-6 has-text-centered">
            <router-link
              to="/coasters"
            >
              <div class="section-title">
                Coasters
              </div>
              
              <div class="columns">
                <div
                  v-for="coaster in coastersPreview"
                  :key="coaster.id"
                  class="column is-10 is-offset-1 home-photo"
                  >
                  <photo
                    :item="coaster.fields"
                    >
                  </photo>
                  
                </div>
              </div>
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
  name: 'Home',
  components: {
    Photo,
  },
  computed: {
    mugsPreview() {
      // console.log('mugsPreview computed, this.$store.state.sources.mugs.data:', this.$store.state.sources.mugs.data);
      return this.$store.state.sources.mugs.data.slice(8, 9);
    },
    coastersPreview() {
      return this.$store.state.sources.coasters.data.slice(2, 3);
    },
  },
};

</script>
