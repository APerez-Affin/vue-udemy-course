<template>
  <div class="entryview">
    <div class="entryview__header">
      <div class="entryview__title">
        <span class="entryview__day">15</span>
        <div class="entryview__date">
          <span class="entryview__month"> Julio</span>
          <span class="entryview__year">2021, jueves</span>
        </div>
      </div>

      <div class="entryview__actions">
        <button class="btn btn--red">
          Borrar
          <font-awesome-icon :icon="['fas', 'trash']" />
        </button>
        <button class="btn btn--outline btn--outline--black">
          Subir foto
          <font-awesome-icon :icon="['fas', 'upload']" />
        </button>
      </div>
    </div>

    <hr />

    <div class="entryview__text">
      <textarea placeholder="¿Qué sucedio hoy?"></textarea>
    </div>

    <AddIcon icon="save" />
    <img
      src="https://estaticos-cdn.prensaiberica.es/clip/df5fc539-206d-45b4-949a-79ef09bda348_16-9-discover-aspect-ratio_default_0.jpg"
      alt="entry-picture"
      class="entryview__picture"
    />
  </div>
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
export default {
  name: "EntryView",
  components: {
    AddIcon: defineAsyncComponent(() => import("../../components/AddIcon")),
  },
};
</script>

<style lang="scss" scoped>
@import "./EntryView.scss";
</style>