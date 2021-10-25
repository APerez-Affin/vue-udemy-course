<template>
  <Navbar />
  <div class="daybook">
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
export default {
  name: "DayBookLayout",
  components: {
    Navbar: defineAsyncComponent(() => import("../../components/Navbar")),
    EntryList: defineAsyncComponent(() => import("../../components/EntryList")),
  },
};
</script>

<style lang="scss" scoped>
@import "./Daybook.scss";
</style>
