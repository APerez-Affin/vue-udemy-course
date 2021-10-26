<template>
  <Navbar />

  <div v-if="isLoading">
    <Spinner />
  </div>

  <div v-else class="daybook">
    <div class="daybook__col">
      <EntryList />
    </div>
    <div class="daybook__col">
      <router-view />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "DayBookLayout",
  computed: {
    ...mapState("journal", ["isLoading"]),
  },
  components: {
    Navbar: defineAsyncComponent(() => import("../../components/Navbar")),
    EntryList: defineAsyncComponent(() => import("../../components/EntryList")),
    Spinner: defineAsyncComponent(() => import("../../components/Spinner")),
  },
  methods: {
    ...mapActions("journal", ["loadEntries"]),
  },
  created() {
    this.loadEntries();
  },
};
</script>

<style lang="scss" scoped>
@import "./Daybook.scss";
</style>
