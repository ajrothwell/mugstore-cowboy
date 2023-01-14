<template>
  <div>
    <img
      v-if="item.pictures"
      class="circle"
      :src="item.pictures[0].thumbnails.full.url"
    />
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