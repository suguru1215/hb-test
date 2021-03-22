<template>
  <div>
    <HeaderDefault />
    <div class="w-full md:w-wrap mx-auto mt-20 md:mt-12 mb-32">
      <Nuxt />
    </div>
    <Sidebar />
  </div>
</template>

<script>
import HeaderDefault from "@/components/layouts/Admin/Headers/HeaderDefault.vue";
import Sidebar from "@/components/layouts/Admin/Sidebar/Sidebar.vue";

export default {
  components: {
    HeaderDefault,
    Sidebar
  }
};
</script>
