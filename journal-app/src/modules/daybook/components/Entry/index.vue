<template>
  <div class="entry" @click="$router.push({ name: 'entry', params: { id: 10} })">
    <div class="entry__title">
      <span class="entry__day">15</span>
      <div class="entry__date">
        <span class="entry__month"> Julio</span>
        <span class="entry__year">2021, jueves</span>
      </div>
    </div>
    <div class="entry__description">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
      fugiat exercitationem at quo, harum eum magni illum numquam iure
      blanditiis ut, assumenda animi molestias porro adipisci odit magnam.
      Deserunt, natus.
    </div>
  </div>
</template>

<script>
export default {
  name: "Entry",
};
</script>

<style lang="scss" scoped>
@import "./Entry.scss";
</style>