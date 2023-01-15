<template>
  <section>

    <div class="container columns mt-4 mb-4">
      <div class="column is-3 pt-1 pb-1">
        <router-link
          to="/Coasters"
          class="item-page-item-title"
        >
          <button
            class="button"
          >
            <font-awesome-icon icon="arrow-left" />
            <div class="pl-2">Back to Coasters</div>
          </button>
        </router-link>
      </div>
      <div class="column is-6 has-text-centered pt-1 pb-1">
        <h2 class="item-page-item-title">
          {{ currentCoaster.fields.name }} Coaster
        </h2>
      </div>
    </div>

    <div class="container columns">
      <div class="column is-7">

        <!-- <div class="columns">
          <div class="column is-10 is-offset-1 carousel-holder"> -->
            <photo-carousel
              :item="currentCoaster"
            >
            </photo-carousel>
          <!-- </div>
        </div> -->
      </div>

      <div class="column is-5">
        <div class="container has-text-centered mt-4">
          <button
            class="button is-multiline"
            @click="buyItem"
          >
            Add {{ currentCoaster.fields.name }} to Square Site Cart
          </button>
        </div>  
      </div>
    </div>
    
  </section>
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
  methods:{
    buyItem() {
      // console.log('buyItem is running');
      window.location.href = this.currentCoaster.fields.square;
    },
  },
};

</script>