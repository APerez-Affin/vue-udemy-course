<template>
  <div>
    <h1>Counter - vuex</h1>

    <div>
      <p>mapState: {{ count }}</p>
      <p>lastRandomInt: {{ lastRandomInt }}</p>
      <p>lastMutation: {{ lastMutation }}</p>
    </div>

    <button @click="increment">+1</button>
    <button @click="incrementBy">+5</button>
    <button :disabled="getLoading" @click="incrementRandomInt">Random</button>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "Counter",
  computed: {
    ...mapState("counter", ["count", "lastRandomInt", "lastMutation"]),
    ...mapGetters("counter", ["getLoading"]),
    // ...mapState({
    //   count: (state) => state.count,
    // }),
  },
  methods: {
    ...mapActions("counter", ["incrementRandomInit"]),
    increment() {
      this.$store.commit("counter/increment");
    },
    incrementBy() {
      this.$store.commit("counter/incrementBy", 5);
    },
    incrementRandomInt() {
      this.incrementRandomInit();
    },
  },
};
</script>
