<template>
  <!-- Wrapper -->
  <div id="wrapper">
    <!-- Header Container
================================================== -->

    <!-- Header Container / End -->

    <!-- Banner
================================================== -->
    <the-banner></the-banner>
    <!-- Content
================================================== -->
    <the-categories></the-categories>
    <!-- Category Boxes / End -->

    <!-- Fullwidth Section -->
    <the-places></the-places>
    <!-- Fullwidth Section / End -->

    <the-reviews></the-reviews>

    <!-- Info Section -->
    <the-plan></the-plan>
    <!-- Info Section / End -->

    <!-- Recent Blog Posts -->
    <the-blog></the-blog>
    <!-- Recent Blog Posts / End -->

    <!-- Footer
================================================== -->

    <!-- Footer / End -->

    <!-- Back To Top Button -->
    <div id="backtotop"><a href="#"></a></div>
  </div>
  <!-- Wrapper / End -->
</template>

<script>
import TheBanner from "../components/TheBanner.vue";
import TheCategories from "../components/TheCategories";
import ThePlaces from "../components/ThePlaces.vue";
import TheReviews from "../components/TheReviews.vue";
import ThePlan from "../components/ThePlan.vue";
import TheBlog from "../components/TheBlog.vue";

export default {
  name: "HomeView",
  components: {
    TheBanner,
    TheCategories,
    ThePlaces,
    TheReviews,
    ThePlan,
    TheBlog,
  },
};
</script>
