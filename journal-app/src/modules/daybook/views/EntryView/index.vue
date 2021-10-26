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
          <button v-if="entry.id" class="btn btn--red" @click="onDeleteEntry">
            Borrar
            <font-awesome-icon :icon="['fas', 'trash']" />
          </button>
          <input
            v-show="false"
            type="file"
            @change="onSelectedImage"
            ref="imageSelector"
            accept="image/png, image/jpg"
          />
          <button
            class="btn btn--outline btn--outline--black"
            @click="onSelectImage"
          >
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
        v-if="entry.picture && !localImage"
        :src="entry.picture"
        alt="entry-picture"
        class="entryview__picture"
      />
      <img
        v-if="localImage"
        :src="localImage"
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

/* Alerts */
import Swal from "sweetalert2";

/* Helpers */
import getDayMonthYear from "../../helpers/getDayMonthYear";
import uploadImage from "../../helpers/uploadImage"

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
      localImage: null,
      file: null,
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
    ...mapActions("journal", ["updateEntry", "createEntry", "deleteEntry"]),
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
      new Swal({
        title: "Espere por favor",
        allowOutsideClick: false,
      });
      Swal.showLoading();

      const picture = await uploadImage(this.file);
      this.entry.picture = picture;

      if (this.entry.id) {
        this.updateEntry(this.entry);
      } else {
        const id = await this.createEntry(this.entry);
        this.$router.push({ name: "entry", params: { id } });
      }
      this.file = null;
      Swal.fire("Guardado", "Entrada registrada con éxito", "success");
     
    },
    async onDeleteEntry() {
      const { isConfirmed } = await Swal.fire({
        title: "¿Está seguro?",
        text: "Una vez borrado, no se puede recuperar",
        showDenyButton: true,
        confirmButtonText: "Si, estoy seguro",
      });
      if (isConfirmed) {
        new Swal({
          title: "Espere por favor",
          allowOutsideClick: false,
        });
        Swal.showLoading();
        await this.deleteEntry(this.entry.id);
        this.$router.push({ name: "no-entry" });
        Swal.fire("Eliminado", "", "success");
      }
    },
    onSelectedImage(event) {
      const file = event.target.files[0];

      if (!file) {
        this.localImage = null;
        this.file = null;
        return;
      }

      this.file = file;
      const fr = new FileReader();
      fr.onload = () => (this.localImage = fr.result);
      fr.readAsDataURL(file);
    },
    onSelectImage() {
      this.$refs.imageSelector.click();
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