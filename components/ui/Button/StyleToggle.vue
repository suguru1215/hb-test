<template>
  <button
    class="absolute bg-black h-8 w-8 inline-block rounded p-1 top-3 right-3 cursor-pointer hover:opacity-100 focus:outline-none focus:border-none z-10"
    v-on:click="change_class()"
  >
    <i class="text-2xl leading-none"
      v-bind:class="[isActive === true ? 'mdi-bookmark text-beige-900' : 'mdi-bookmark-outline text-white', mdiClass]"
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
