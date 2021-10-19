<template>
  <h1>
    Pokemon: <span>#{{ id }}</span>
  </h1>

  <div v-if="pokemon">
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
  </div>
</template>

<script>
export default {
  name: "PokemonPage",
  props: {
    id: {
      type: Number,
      requited: true,
    },
  },
  data() {
    return {
      pokemon: null,
    };
  },
  created() {
    this.getPokemon();
  },
  methods: {
    async getPokemon() {
      try {
        const pokemon = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${this.id}`
        );
        const data = await pokemon.json();
        this.pokemon = data;
      } catch (error) {
        this.$router.push("/");
      }
    },
  },
  watch: {
    id() {
      this.getPokemon();
    },
  },
};
</script>

<style scoped>
.img {
  width: 250px;
}
</style>
