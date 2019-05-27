<template>
  <article class="st-article">
    <header>
      <h1>{{ article.title }}</h1>
      <figure>
        <img
          :src="article.cover_image"
          :alt="article.title"
        >
      </figure>
    </header>
  </article>
</template>
<script>
export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  }
}
</script>
