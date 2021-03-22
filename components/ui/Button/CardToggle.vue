<template>
  <button
    class="relative -top-2 leading-none focus:outline-none focus:border-none z-10"
    v-on:click="change_class()"
  >
    <i class="text-2xl"
      v-bind:class="[isActive === true ? 'mdi-bookmark text-beige-900' : 'mdi-bookmark-outline', mdiClass]"
    ></i>
  </button>
</template>

<script>
export default {
  data: function() {
    return {
      isActive: false,
      mdiClass: 'mdi'
    }
  },
  methods: {
    change_class: function() {
      this.isActive = !this.isActive
    }
  }
}
</script>
