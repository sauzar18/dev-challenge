<template>
  <!-- vue infinite scrool を使い無限スクロールを実装 -->
  <ul
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="busy"
    infinite-scroll-distance="10"
  >
    <li
      v-for="(post, i) in posts"
      :key="post.id"
      class="st-list"
    >
      <article>
        <header>
          <n-link :to="`/${post.user_tag}/${post.title.replace( ' ', '-' )}`">
            <h1>{{ post.title }}</h1>
            <figure v-if="i === 0">
              <img
                :src="post.cover_image"
                :alt="post.title"
              >
            </figure>
          </n-link>
        </header>
        <div class="st-property">
          <i class="st-icon">
            <img
              :src="post.user_avatar"
              :alt="post.user_name"
            >
          </i>
          <div>
            <n-link
              :to="`/${post.user_tag}`"
              class="st-name"
            >
              {{ post.user_name }}・{{ post.created_at | moment }}
              <span>
                ({{ post.created_at | fromnow }})
              </span>
            </n-link>
            <ul class="st-tag__list">
              <li
                v-for="(tag, i) in post.tags.split(',')"
                :key="i"
              >
                <n-link :to="`/t/${tag}`">
                  #{{ tag }}
                </n-link>
              </li>
            </ul>
          </div>
        </div>
        <footer>
          <n-link :to="`/${post.user_tag}/${post.title}`">
            <i>
              <img
                src="~static/images/ic_cool.png"
                alt="いいね数"
              >
            </i>
            <span class="st-count">
              {{ isCount(post.id) }}
            </span>
          </n-link>
          <n-link :to="`/${post.user_tag}/${post.title}#comment`">
            <i>
              <img
                src="~static/images/ic_comment.png"
                alt="コメント数"
              >
            </i>
            <span class="st-count">
              {{ isComment(post.id) }}
            </span>
          </n-link>
          <n-link
            :to="`/${post.user_tag}/${post.title}`"
            class="st-read"
          >
            min read
          </n-link>
          <button
            type="button"
            class="st-button blue"
          >
            SAVE
          </button>
        </footer>
      </article>
    </li>
  </ul>
</template>
<script>
import moment from 'moment'
export default {
  // filtersでデータを変換できるテンプレートを登録
  filters: {
    moment(date) {
      return moment(date).format('MMM DD')
    },
    fromnow(date) {
      return moment(date).fromNow()
    }
  },
  // propsで親要素からデータを取得その際に型を定義
  props: {
    posts: {
      type: Array,
      required: true
    },
    cools: {
      type: Array,
      required: true
    },
    comments: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      lists: this.posts,
      busy: false,
      count: 10,
      cool: this.cools,
      comment: this.comments
    }
  },
  methods: {
    // 記事のいいね数を取得
    isCount(id) {
      let list = this.cool
      list = list.filter(function (row) {
        if (row.article_id !== id) {
          return false
        }
        return row
      })
      return Number(list.length)
    },
    // コメントのいいね数を取得
    isComment(id) {
      let list = this.comment
      list = list.filter(function (row) {
        if (row.article_id !== id) {
          return false
        }
        return row
      })
      return Number(list.length)
    },
    // 10記事見た際に事実行する
    loadMore() {
      this.busy = true
      if (this.lists.length > 10) {
        setTimeout(() => {
          for (let i = 0, j = 10; i < j; i++) {
            this.count++
          }
          this.busy = false
        }, 1000)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
figure {
  width: 100%;
  img {
    width: 100%;
  }
}
.st-list {
  border: 1px solid #d6d6d6;
  border-radius: 3px;
  box-shadow: 1px 1px 0px #c2c2c2;
  margin: 10px auto 0px;
  background-color: #fff;
  overflow: hidden;
  &:first-child {
    h1 {
      font-size: 48px;
    }
  }
}
h1 {
  font-size: 32px;
  margin: 8px 12px;
  order: 2;
}
header {
  a {
    display: flex;
    flex-direction: column;
    color: #000;
  }
}
.st-property {
  display: flex;
  align-items: center;
  padding: 0 12px;
  margin-bottom: 40px;
}
.st-name {
  display: flex;
  align-items: center;
  color: #666666;
  span {
    font-size: 12px;
    margin-left: 8px;
  }
}
.st-tag__list {
  display: flex;
  li {
    margin-right: 8px;
  }
  a {
    color: #000;
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
}
footer {
  display: flex;
  padding: 0 12px;
  margin-bottom: 16px;
  a {
    display: flex;
    padding: 5px;
    margin: 0 12px;
  }
  i {
    display: flex;
    align-items: center;
  }
  img {
    height: 20px;
  }
}
.st-read {
  margin-left: auto;
  font-size: 13px;
  color: #595959;
}
.st-button {
  width: 58px;
  border-radius: 3px;
  font-size: 16px;
}
.st-count {
  color: #666666;
  margin-left: 8px;
  font-size: 16px;
}
</style>
