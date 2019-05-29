<template>
  <div>
    <app-header />
    <main class="st-main">
      <editor />
    </main>
  </div>
</template>
<script>
// 記事投稿ページ
import AppHeader from '~/components/roofs/Header.vue'
import Editor from '~/components/templates/Editor.vue'
export default {
  components: {
    AppHeader,
    Editor
  }
}
</script>
