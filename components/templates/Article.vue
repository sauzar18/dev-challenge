<template>
  <article class="st-article">
    <header>
      <h1 class="st-size">
        {{ article.title }}
      </h1>
      <figure>
        <img
          :src="article.cover_image"
          :alt="article.title"
        >
      </figure>
      <div class="st-author st-size">
        <n-link
          :to="`/`"
          class="st-name"
        >
          <i class="st-icon mini">
            <img
              :src="article.user_avatar"
              :alt="article.user_name"
            >
          </i>
          {{ article.user_name }}
        </n-link>
        <n-link
          to="/"
          class="st-sns"
        >
          <i>
            <img
              src="~static/images/ic_twitter_black.svg"
              alt="Twitter"
            >
          </i>
        </n-link>
         <n-link
          to="/"
          class="st-sns"
        >
          <i>
            <img
              src="~static/images/ic_github.svg"
              alt="Twitter"
            >
          </i>
        </n-link>
        <time :datetime="article.created_at">
          {{ article.created_at | moment }}
        </time>
        <p>・min read</p>
      </div>
      <ul class="st-category st-size">
        <li
          v-for="(item, i) in article.tags.split(',')"
          :key="i"
        >
          <n-link :to="`/t/${item}`">
            #{{ item }}
          </n-link>
        </li>
      </ul>
    </header>
    <div
      class="st-article__content st-size"
      v-html="markDown"
    />
  </article>
</template>
<script>
import moment from 'moment'
import marked from 'marked'
export default {
  filters: {
    moment(date) {
      return moment(date).format('MMM DD')
    },
    fromnow(date) {
      return moment(date).fromNow()
    }
  },
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      content: this.article.content,
    }
  },
  computed: {
    markDown() {
      return marked(this.content)
    }
  }
}
</script>
<style lang="scss" scoped>
header {
  display: flex;
  flex-direction: column;
  h1 {
    padding: 14px 0 7px;
    font-size: 56px;
  }
}
figure {
  order: -1;
  width: 100%;
}
img {
  width: 100%;
}
.st-icon.mini {
  width: 28px;
  height: 28px;
}
.st-author {
  font-size: 15px;
  color: #666666;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
a {
  display: flex;
  align-items: center;
  color: #666666;
}
.st-sns {
  display: flex;
  margin: 0 4px;
  i {
    width: 18px;
    height: 18px;
    display: flex;
  }
  img {
    width: 100%;
  }
}
.st-category {
  display: flex;
  li {
    margin-right: 4px;
    &:last-child {
      margin-right: 0;
    }
  }
  a {
    padding: 2px 4px;
    background-color: #efefef;
    font-size: 14px;
    border-radius: 3px;
    font-weight: bold;
    &:hover,
    &:focus {
      opacity: 0.8;
    }
  }
}
</style>
