<template>
  <template v-if="entry">
    <div class="entryview">
      <div class="entryview__header">
        <div class="entryview__title">
          <span class="entryview__day">{{ day }}</span>
          <div class="entryview__date">
            <span class="entryview__month">{{ month }}</span>
            <span class="entryview__year">{{ yearDay }}</span>
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
        <textarea placeholder="¿Qué sucedio hoy?" v-model="entry.text">
        </textarea>
      </div>

      <img
        src="https://estaticos-cdn.prensaiberica.es/clip/df5fc539-206d-45b4-949a-79ef09bda348_16-9-discover-aspect-ratio_default_0.jpg"
        alt="entry-picture"
        class="entryview__picture"
      />
    </div>
  </template>
  <AddIcon icon="save" @on:click="saveEntry" />
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapActions, mapGetters } from "vuex";

/* Helpers */
import getDayMonthYear from "../../helpers/getDayMonthYear";

export default {
  name: "EntryView",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      entry: null,
    };
  },
  components: {
    AddIcon: defineAsyncComponent(() => import("../../components/AddIcon")),
  },
  computed: {
    ...mapGetters("journal", ["getEntryById"]),
    day() {
      const { day } = getDayMonthYear(this.entry.date);
      return day;
    },
    month() {
      const { month } = getDayMonthYear(this.entry.date);
      return month;
    },
    yearDay() {
      const { yearDay } = getDayMonthYear(this.entry.date);
      return yearDay;
    },
  },
  methods: {
    ...mapActions("journal", ["updateEntry", "createEntry"]),
    loadEntry() {
      let entry;

      if (this.id === "new") {
        entry = {
          text: "Nuevo entry",
          date: new Date().getTime(),
        };
      } else {
        entry = this.getEntryById(this.id);
        if (!entry) this.$router.push({ name: "no-entry" });
      }
      this.entry = entry;
    },
    async saveEntry() {
      if (this.entry.id) {
        this.updateEntry(this.entry);
      } else {
        const id = await this.createEntry(this.entry);
        this.$router.push({ name: "entry", params: { id } });
      }
    },
  },
  created() {
    this.loadEntry();
  },
  watch: {
    id(value) {
      this.loadEntry(value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./EntryView.scss";
</style>