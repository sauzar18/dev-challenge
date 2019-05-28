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
          <article-content
            :article="article"
          />
          <form
            method="POST"
            action="/api/comment"
          >
            <input
              :value="article.id"
              type="hidden"
              name="article_id"
            >
            <input
              value="0"
              type="hidden"
              name="parent_id"
            >
            <comment
              v-model="comment"
              class="st-size"
            />
          </form>
          <comment-return class="st-size" />
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
import Comment from '~/components/parts/Comment.vue'
import CommentReturn from '~/components/templates/CommentReturn.vue'
export default {
  components: {
    AppHeader,
    ArticleContent,
    ArticleCools,
    Comment,
    CommentReturn
  },
  data() {
    return {
      comment: ''
    }
  },
  computed: {
    article() {
      return this.$store.state.article
    }
  },
  async asyncData({ app, store, params, redirect }) {
    const data = await app.$axios.$get(`/api/coolData`)
    return { cools: data }
  },
  async fetch({ app, store, params, redirect }) {
    const change = params.slug.replace(' ', '-')
    const data = await app.$axios.$get(`/api/get_article/${change}`)
    const [data2, data3] = await Promise.all([
      app.$axios.$get(`/api/comment/${data[0].id}`),
      app.$axios.$get(`/api/likeData`)
    ])
    store.commit('SET_ARTICLE', data[0])
    store.commit('SET_COMMENT', data2)
    store.commit('SET_LIKE', data3)
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
  top: 90px;
  left: calc(55.5% - 750px);
}
.st-right {
  width: 310px;
}
</style>
