<template>
  <div>
    <app-header />
    <main class="st-main">
      <form action="/">
        <editor />
      </form>
    </main>
  </div>
</template>
<script>
import AppHeader from '~/components/roofs/Header.vue'
import Editor from '~/components/templates/Editor.vue'
export default {
  components: {
    AppHeader,
    Editor
  }
}
</script>
