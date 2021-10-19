<template>
  <h1>About Page</h1>
  <hr />
  <h2>{{ name }}</h2>
  <button @click="onChangeName">Change name</button>
</template>

<script>
export default {
  name: "AboutPage",
  data() {
    return {
      name: "Adrian",
    };
  },
  methods: {
    onChangeName() {
      this.name = "Test";
    },
  }, 
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  update() {
    console.log("update");
  },
  activated() {
    console.log("activated");
  },
  desactivated() {
    console.log("desactivated");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
  },
  errorCaptured() {
    console.log("errorCaptured");
  },
  renderTracked() {
    console.log("renderTracked");
  },
  renderTriggered() {
    console.log("renderTriggered");
  },
};
</script>

<style></style>
