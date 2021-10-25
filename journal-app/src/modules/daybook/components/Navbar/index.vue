<template>
  <nav class="navbar">
      <div class="navbar__content">
        <a class="navbar__brand">
          <figure class="navbar__brand-container">
            <img
              alt="Vue logo"
              class="navbar__brand-logo"
              src="@/assets/logo.png"
            />
          </figure>
          <span class="navbar__brand-logoName">Daybook</span>
        </a>

        <div class="navbar__actions">
          <button class="btn btn--outline">
            <FontAwesomeIcon icon="sign-out-alt" />
          </button>
        </div>
      </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style lang="scss" scoped>
@import "./Navbar.scss";
</style>