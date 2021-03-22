<template>
  <div>
    <HeaderBack :title="title" />
    <div class="w-full md:w-wrap mx-auto mt-20 md:mt-12 mb-32">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import HeaderBack from "@/components/layouts/Admin/Headers/HeaderBack.vue";

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
