<template>
  <the-header></the-header>
  <router-view />
  <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style lang="scss"></style>
