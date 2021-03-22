<template>
 <div class="nav">
   <div
     class="prev"
     @click="clickPrevNewsPage()"
   >
     <svg /> // 省略
   </div>
   <ul>
     <li
       :class="{ selected: newsSection.nav.now === 0}"
       @click="newsSection.nav.now = 0"
     >
       1
     </li>
   </ul>
   <div
     class="next"
     @click="clickNextNewsPage()"
   >
     <svg /> // 省略
   </div>
 </div>
</template>

<script>
export default {
 data() {
   return {
     newsSection: {
       nav: {
         now: 0,
         last: 0,
       },
     },
   }
 },
 methods: {
   clickPrevNewsPage() {
     this.newsSection.nav.now = this.newsSection.nav.now - 1 < 0
       ? this.newsSection.nav.now
       : this.newsSection.nav.now - 1
   },
   clickNextNewsPage() {
     this.newsSection.nav.now = this.newsSection.nav.now + 1 > this.newsSection.nav.last - 1
       ? this.newsSection.nav.now
       : this.newsSection.nav.now + 1
   },
 },
}
</script>

<style lang="scss" scoped>
  .nav {
     ul {
       li {
         &.selected {
           padding: 3px 5px;
           border: 1px solid #4B4B4B;
         }
       }
     }
  }
</style>
