<template>
  <div class="entrylist">
    <div class="entrylist__search">
      <input
        type="text"
        class="input input__text"
        placeholder="Buscar entrada"
        v-model.trim="term"
      />
    </div>
    <div class="entrylist__scrollarea">
      <Entry
        v-for="entry of entriesByTerm"
        :key="entry.id"
        :entry="entry"
      />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";
export default {
  name: "EntryList",
  components: {
    Entry: defineAsyncComponent(() => import("../../components/Entry")),
  },
  computed: {
    ...mapGetters("journal", ["getEntriesByTerm"]),
    entriesByTerm() {
      return this.getEntriesByTerm(this.term);
    },
  },
  data() {
    return {
      term: "",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./EntryList.scss";
</style>