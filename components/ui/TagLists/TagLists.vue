<template>
  <ul class="tag-lists">
    <li v-for="tag in tags" v-bind:key="tag.id">
      <nuxt-link v-bind:to="tag.link">{{ tag.name }}</nuxt-link>
    </li>
  </ul>
</template>


<script>
export default {
 data() {
    return {
      tags: [
        { id: 1, name: '似合わせカット', link: '/' },
        { id: 2, name: 'ショートカット', link: '/' },
        { id: 3, name: 'ボブスタイル', link: '/' },
        { id: 4, name: 'カラー', link: '/' },
        { id: 5, name: 'こだわりのトリートメント', link: '/' },
        { id: 6, name: 'ヘアセット', link: '/' },
      ]
    }
  }
}
</script>
