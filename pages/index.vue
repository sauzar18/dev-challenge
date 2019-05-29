<template>
  <div>
    <app-header />
    <div class="st-main">
      <div class="st-left">
        <keep-alive>
          <my-link v-if="$auth.$state.user" />
        </keep-alive>
        <category-nav :categories="categories" />
      </div>
      <main class="st-center">
        <div>
          <period-menu :menus="periods" />
        </div>
        <list
          v-if="posts.toString()"
          :posts="posts"
        />
        <p
          v-else
          class="st-nothing"
        >
          現在投稿された記事はありません
        </p>
      </main>
      <div class="st-right">
        <sign-bar v-if="!$auth.$state.user" />
        <new-listings />
      </div>
    </div>
  </div>
</template>
<script>
import AppHeader from '~/components/roofs/Header.vue'
import CategoryNav from '~/components/templates/CategoryNav.vue'
import PeriodMenu from '~/components/templates/PeriodMenu.vue'
import SignBar from '~/components/templates/SignBar.vue'
import List from '~/components/templates/List.vue'
import MyLink from '~/components/roofs/MyLink.vue'
import NewListings from '~/components/templates/NewListings.vue'
export default {
  components: {
    AppHeader,
    CategoryNav,
    PeriodMenu,
    SignBar,
    List,
    MyLink,
    NewListings
  },
  data() {
    return {
      categories: [
        { id: 0, name: 'javascript' },
        { id: 1, name: 'webdev' },
        { id: 2, name: 'beinners' },
        { id: 3, name: 'discuss' },
        { id: 4, name: 'react' },
        { id: 5, name: 'career' },
        { id: 6, name: 'node' },
        { id: 7, name: 'python' },
        { id: 8, name: 'productivity' },
        { id: 9, name: 'css' },
        { id: 10, name: 'tutorial' },
        { id: 11, name: 'showdev' },
        { id: 12, name: 'opensource' },
        { id: 13, name: 'devops' },
        { id: 14, name: 'ruby' },
        { id: 15, name: 'html' },
        { id: 16, name: 'help' },
        { id: 17, name: 'aws' },
        { id: 18, name: 'docker' },
        { id: 19, name: 'testing' },
        { id: 20, name: 'java' },
        { id: 21, name: 'security' },
        { id: 22, name: 'vue' },
        { id: 23, name: 'php' },
        { id: 24, name: 'angular' },
        { id: 25, name: 'typescript' },
        { id: 26, name: 'linux' },
        { id: 27, name: 'android' },
        { id: 28, name: 'git' },
        { id: 29, name: 'go' }
      ],
      periods: [
        { id: 0, name: 'FEED', link: '/' },
        { id: 1, name: 'WEEK', link: '/top/week' },
        { id: 2, name: 'MONTH', link: '/top/month' },
        { id: 3, name: 'YEAR', link: '/top/year' },
        { id: 4, name: 'INFINITY', link: '/top/infinity' },
        { id: 5, name: 'LATEST', link: '/top/latest' }
      ]
    }
  },
  async asyncData({ app, store, params, redirect }) {
    const data = await app.$axios.$get('/api/get_post')
    return { posts: data }
  }
}
</script>
<style lang="scss" scoped>
.st-main {
  width: 1250px;
  margin: 26px auto;
  display: flex;
  justify-content: space-between;
}
.st-center {
  width: 660px;
}
.st-right {
  width: 260px;
}
.st-nothing {
  font-size: 14px;
  margin: 20px 0;
}
</style>
