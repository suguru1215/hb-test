<template>
  <div>
    <HeaderBack :title="title" />
    <main class="main-wrap">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import HeaderBack from "@/components/layouts/Headers/HeaderBack.vue";

export default {
  components: {
    HeaderBack
  },
  data() {
    return {
      title: ''
    }
  },
  created() {
    this.setListener()
  },
  methods: {
    setListener() {
      this.$nuxt.$on('updateHeader', this.setHeader)
    },
    setHeader(title) {
      this.title = title || ''
    }
  }
};
</script>
