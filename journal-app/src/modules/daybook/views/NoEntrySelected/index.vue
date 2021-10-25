<template>
  <div class="noentryselected">
    <h1 class="noentryselected__title">No hay nada seleccionado</h1>
    <AddIcon />
  </div>
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
export default {
  name: "NoEntrySelected",
  components: {
    AddIcon: defineAsyncComponent(() => import("../../components/AddIcon")),
  },
};
</script>

<style lang="scss" scoped>
@import "./NoEntrySelected.scss";
</style>