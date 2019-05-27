<template>
  <ul>
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
            {{ isCount(post.user_id) }}
          </n-link>
          <n-link :to="`/${post.user_tag}/${post.title}#comment`">
            <i>
              <img
                src="~static/images/ic_comment.png"
                alt="コメント数"
              >
            </i>
            {{ isComment(post.user_id) }}
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
  filters: {
    moment(date) {
      return moment(date).format('MMM DD')
    },
    fromnow(date) {
      return moment(date).fromNow()
    }
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  methods: {
    isCount(e) {
    },
    isComment(e) {
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
</style>
