<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <button class="primary" @click="goToDayBook">Primary</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  methods: {
    goToDayBook() {
      this.$router.push({ name: "daybook" });
    },
  },
};
</script>


<style scoped lang="scss">
.primary {
  color: green;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
</style>