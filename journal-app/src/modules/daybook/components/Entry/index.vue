<template>
  <div
    class="entry"
    @click="$router.push({ name: 'entry', params: { id: entry.id } })"
  >
    <div class="entry__title">
      <span class="entry__day">{{ day }}</span>
      <div class="entry__date">
        <span class="entry__month">{{ month }}</span>
        <span class="entry__year">{{ yearDay }}</span>
      </div>
    </div>
    <div class="entry__description">
      {{ shortText }}
    </div>
  </div>
</template>

<script>
import getDayMonthYear from "../../helpers/getDayMonthYear";
export default {
  name: "Entry",
  props: {
    entry: {
      type: Object,
      required: true,
    },
  },
  computed: {
    shortText() {
      return this.entry.text.length > 130
        ? this.entry.text.substring(0, 130) + "..."
        : this.entry.text;
    },
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
};
</script>

<style lang="scss" scoped>
@import "./Entry.scss";
</style>