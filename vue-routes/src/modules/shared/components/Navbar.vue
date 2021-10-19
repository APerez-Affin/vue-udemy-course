<template>
  <nav>
    <!--
      <router-link :to="{ name: 'home' }">Pokemon List</router-link>
      <router-link :to="{ name: 'pokemon-id', params: { id: 12 } }"> Pokemon por id</router-link>
      <router-link :to="{ name: 'about' }">About</router-link> 
    -->
    <CustomLink v-for="link of links" :key="link.to" :link="link" />
  </nav>
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";

export default {
  name: "Navbar",
  data() {
    return {
      links: [
        { to: "pokemon-home", name: "Pokemons" },
        { to: "pokemon-id", name: "Pokemon por id", id: 151 },
        { to: "pokemon-about", name: "About" },
        { to: "dbz-characters", name: "DBZ-Characters" },
        { to: "dbz-about", name: "DBZ-About" },
        { to: "https://google.es", name: "Google" },
      ],
    };
  },
  components: {
    CustomLink: defineAsyncComponent(() => import("./CustomLink.vue")),
  },
};
</script>

<style scoped>
div {
  padding: 0 30px;
}

div a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 10px;
}
</style>
