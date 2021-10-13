<template>
  <div v-if="!pokemon">
    <h1>Espere por favor</h1>
  </div>
  <div v-else>
    <h1>¿Quién es este pokemón?</h1>
    <PokemonPicture :pokemonId="pokemon.id" :show-pokemon="showPokemon" />
    <PokemonOptions :pokemons="pokemonArr" @selected-pokemon="checkAnswer" />

    <div v-if="showAnswer">
      <h2 class="fadeIn">{{ message }}</h2>
      <button @click="newGame">Volver a intentar</button>
    </div>
  </div>
</template>

<script>
  import { PokemonOptions, PokemonPicture } from "@/components";
  import getPokemonsOptions from "@/helpers/getPokemonOptions";
  getPokemonsOptions();
  export default {
    components: { PokemonOptions, PokemonPicture },
    name: "HomePage",
    data() {
      return {
        pokemonArr: [],
        pokemon: null,
        showPokemon: false,
        showAnswer: false,
        message: "",
      };
    },
    methods: {
      async mixPokemonArray() {
        this.pokemonArr = await getPokemonsOptions();
        const randInt = Math.floor(Math.random() * 4);
        this.pokemon = this.pokemonArr[randInt];
      },
      checkAnswer(id) {
        this.showPokemon = true;
        this.showAnswer = true;
        id === this.pokemon.id
          ? (this.message = `Correcto, es ${this.pokemon.name}`)
          : (this.message = `Oops, era ${this.pokemon.name}`);
      },
      newGame(){
        this.showPokemon = false;
        this.showAnswer = false;
        this.message = '';
        this.pokemon= null;
        this.mixPokemonArray();
      }
    },
    mounted() {
      this.mixPokemonArray();
    },
  };
</script>

<style></style>
