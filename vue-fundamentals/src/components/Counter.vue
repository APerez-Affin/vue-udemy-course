<template>
  <h2>{{ customTitle }}</h2>
  <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
  <div class="buttons">
    <button @click="increase">+1</button>
    <button @click="decrease">-1</button>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
      },
      start: {
        type: Number,
        default: 100,

        validator(value) {
          return value > 100;
        },
      },
    },
    name: "Counter",
    data() {
      return {
        counter: 5,
      };
    },
    computed: {
      squareCounter() {
        return this.counter * this.counter;
      },
      customTitle() {
        return this.title || "Counter";
      },
    },
    methods: {
      increase() {
        this.counter++;
      },
      decrease() {
        this.counter--;
      },
    },
  };
</script>

<style>
  button {
    background-color: #64b687;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    margin: 0 8px;
    padding: 8px 16px;
    transition: 0.3 ease-in-out;
    border: none;
    outline: none;
  }
  button:hover {
    background-color: #5aaa;
  }
</style>
