<template>
  <div>
    <app-header />
    <div class="st-main">
      <main>
        <article-cools />
        <div class="st-center">
          <article-content :article="article" />
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import AppHeader from '~/components/roofs/Header.vue'
import ArticleContent from '~/components/templates/Article.vue'
import ArticleCools from '~/components/templates/ArticleCools.vue'
export default {
  components: {
    AppHeader,
    ArticleContent,
    ArticleCools
  },
  async asyncData({ app, store, params, redirect }) {
    const change = params.slug.replace(' ', '-')
    const data = await app.$axios.$get(`/api/get_article/${change}`)
    return { article: data[0] }
  }
}
</script>
<style lang="scss" scoped>
.st-center {
  width: 880px;
}
main {
  display: flex;
}
</style>
