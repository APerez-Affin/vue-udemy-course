<template>
  <Counter title="Primer counter" :start="101" />

  <Counter :start="101" />

  <Counter :start="101" />

  <Indecision />
</template>

<script>
  import { Counter, Indecision } from "@/components";

  export default {
    name: "App",
    components: {
      Counter,
      Indecision,
    },
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
