<template>
  <section>
    
    <div class="container columns mt-4 mb-4">
      <div class="column is-3 pt-1 pb-1">
        <router-link
          to="/Mugs"
          class="item-page-item-title"
        >
          <button
            class="button"
          >
            <font-awesome-icon icon="arrow-left" />
            <div class="pl-2">Back to Mugs</div>
          </button>
        </router-link>
      </div>
      <div class="column is-6 has-text-centered pt-1 pb-1">
        <h2 class="item-page-item-title">
          {{ currentMug.fields.name }} Mug
        </h2>
      </div>
    </div>

    <div class="container columns">
      <div class="column is-7">

        <!-- <div class="columns">
          <div class="column is-10 is-offset-1 carousel-holder"> -->
            <photo-carousel
              :item="currentMug"
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
            Add {{ currentMug.fields.name }} to Square Site Cart
          </button>
        </div>  
      </div>
    </div>
    
  </section>
</template>

<script>

import PhotoCarousel from '@/components/PhotoCarousel.vue';

export default {
  name: 'Mug',
  components: {
    PhotoCarousel,
  },
  computed: {
    mugsData() {
      return this.$store.state.sources.mugs.data;
    },
    currentMug() {
      let mug = this.mugsData.filter(mug => mug.fields.id == this.$route.params.mugId)[0];
      return mug;
    },
  },
  methods:{
    buyItem() {
      window.location.href = this.currentMug.fields.square;
    },
  },
};

</script>