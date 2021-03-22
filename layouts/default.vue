<template>
  <div>
    <HeaderDefault />
    <main class="main-wrap">
      <Nuxt />
    </main>
    <Banner />
    <Footer />
  </div>
</template>
<script>
import HeaderDefault from "~/components/layouts/Headers/HeaderDefault.vue";
import Banner from "~/components/pages/Banner/Banner.vue";
import Footer from "~/components/layouts/Footer/Footer.vue";

export default {
  components: {
    HeaderDefault,
    Banner,
    Footer
  }
};
</script>
