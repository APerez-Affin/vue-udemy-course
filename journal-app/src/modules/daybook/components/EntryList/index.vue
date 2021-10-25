<template>
  <div class="entrylist">
    <div class="entrylist__search">
      <input
        type="text"
        class="input input__text"
        placeholder="Buscar entrada"
      />
    </div>
    <div class="entrylist__scrollarea">
      <Entry 
        v-for="(item, index) of 100" 
        :key="{ index }" 
        />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  name: "EntryList",
  components: {
    Entry: defineAsyncComponent(() => import("../../components/Entry")),
  },
};
</script>

<style lang="scss" scoped>
@import "./EntryList.scss";
</style>