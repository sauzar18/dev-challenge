<template>
  <div>
    <app-header />
    <main class="st-main">
      <form action="/">
        <editor />
        <editor-footer />
      </form>
    </main>
  </div>
</template>
<script>
import AppHeader from '~/components/roofs/Header.vue'
import Editor from '~/components/templates/Editor.vue'
import EditorFooter from '~/components/templates/EditorFooter.vue'
export default {
  components: {
    AppHeader,
    Editor,
    EditorFooter
  }
}
</script>
