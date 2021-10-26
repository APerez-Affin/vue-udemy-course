<template>
  <button class="btn btn-primary" :class="icon" @click="$emit('on:click')">
    <font-awesome-icon :icon="['fas', icon]" />
  </button>
</template>

<script>
export default {
  name: "AddIcon",
  props: {
    icon: {
      type: String,
      default: "plus",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./AddIcon.scss";
</style>