<template>
  <div class="px-4 md:px-0 mt-8">
    <h3 class="text-xl mb-4 md:mb-6">あなたにおすすめのサロン</h3>
    <div class="flex justify-between -mx-2 overflow-scroll">
      <SalonCardS />
      <SalonCardS />
      <SalonCardS />
    </div>
    <!-- //cards -->
  </div>
</template>

<script>
import SalonCardS from "~/components/ui/Cards/SalonCardS";

export default {
  components: {
    SalonCardS
  }
}
</script>
