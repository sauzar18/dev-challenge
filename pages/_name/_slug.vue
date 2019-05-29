<template>
  <div>
    <app-header />
    <div class="st-main">
      <main>
        <!-- いいねの一覧を取得 -->
        <article-cools
          class="st-left"
          :article-id="article.id"
          :cools="cools"
        />
        <div class="st-center">
          <!-- 記事を取得 -->
          <article-content
            :article="article"
          />
          <!-- コメントをPOST -->
          <form
            v-if="$auth.$state.user"
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
            <!-- コメントフォーム -->
            <comment
              v-model="comment"
              class="st-size"
            />
          </form>
          <!-- コメントの一覧を取得 -->
          <comment-return class="st-size" />
        </div>
        <!-- 投稿者情報を取得 -->
        <author
          :author="this.$store.state.article"
          class="st-right"
        />
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
import Author from '~/components/roofs/Author.vue'
export default {
  components: {
    AppHeader,
    ArticleContent,
    ArticleCools,
    Comment,
    CommentReturn,
    Author
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
  // storeで管理しないdataを取得
  async asyncData({ app, store, params, redirect }) {
    const data = await app.$axios.$get(`/api/coolData`)
    return { cools: data }
  },
  // storeで管理するdataを取得
  async fetch({ app, store, params, redirect }) {
    // 今回はタイトルをゲットする値にしている、スペースがある場合は-に変換
    const change = params.slug.replace(' ', '-')
    const data = await app.$axios.$get(`/api/get_article/${change}`)
    const [data2, data3] = await Promise.all([
      app.$axios.$get(`/api/comment/${data[0].id}`),
      app.$axios.$get(`/api/likeData`)
    ])
    // storeに格納
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
  padding-bottom: 20px;
}
.st-main {
  margin: 24px auto;
}
main {
  display: flex;
  width: 1250px;
  margin: 0 auto;
  align-items: flex-start;
}
.st-left {
  position: fixed;
  top: 90px;
  left: calc(55.5% - 750px);
}
.st-right {
  width: 310px;
  position: sticky;
  top: 62px;
}
</style>
