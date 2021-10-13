<template>
  <div class="pokemon-container">
    <img
      v-if="!showPokemon"
      class="hidden-pokemon"
      :src="imgSrc"
      alt="pokemon"
    />
    <img v-else class="fade-in" :src="imgSrc" alt="pokemon" />
  </div>
</template>

<script>
  export default {
    name: "PokemonPicture",
    props: {
      pokemonId: {
        required: true,
        type: Number,
      },
      showPokemon: {
        required: true,
        type: Boolean,
      },
    },
    computed: {
      imgSrc() {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
      },
    },
    data() {
      return {};
    },
  };
</script>

<style scoped>
  /* Pokemon Picture */
  .pokemon-container {
    height: 200px;
    display: flex;
    justify-content: center;
  }
  img {
    height: 200px;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
  }
  .hidden-pokemon {
    filter: brightness(0);
  }
</style>
