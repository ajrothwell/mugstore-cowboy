<template>
  <div>
    <img
      v-if="item.pictures"
      :src="item.pictures[0].thumbnails.full.url"
    />
    <!-- </img> -->
  </div>
</template>

<script>

export default {
  name: 'Photo',
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>