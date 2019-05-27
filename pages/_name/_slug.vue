<template>
  <div>
    <app-header />
    <div class="st-main">
      <main>
        <article-cools
          class="st-left"
          :article-id="article.id"
          :cools="cools"
        />
        <div class="st-center">
          <article-content :article="article" />
        </div>
        <div class="st-right" />
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
    const [data, data2] = await Promise.all([
      app.$axios.$get(`/api/get_article/${change}`),
      app.$axios.$get(`/api/coolData`)
    ])
    return { article: data[0], cools: data2 }
  }
}
</script>
<style lang="scss" scoped>
.st-center {
  width: 880px;
  margin: 0 auto;
  border: 1px solid #d6d6d6;
  box-shadow: 1px 1px 0px #c2c2c2;
  border-radius: 3px;
  background-color: #fff;
  overflow: hidden;
}
.st-main {
  margin: 24px auto;
}
main {
  display: flex;
}
.st-left {
  position: fixed;
  top: 120px;
  left: 0;
}
.st-right {
  width: 310px;
}
</style>
