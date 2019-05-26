<template>
  <ul>
    <li
      v-for="(post, i) in posts"
      :key="post.id"
      class="st-list"
    >
      <article>
        <header>
          <h1>{{ post.title }}</h1>
          <figure v-if="i === 0">
            <img
              :src="post.cover_image"
              :alt="post.title"
            >
          </figure>
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
              :to="'/' + post.user_tag"
              class="st-name"
            >
              {{ post.user_name }}・{{ post.created_at | moment }}
              <span>
                ({{ post.created_at | fromnow }})
              </span>
            </n-link>
            <ul class="st-tag__list">
              <li
                v-for="(tag, i) in post.tags"
                :key="i"
              >
                <n-link :to="'/t/' + tag">
                  #{{ tag }}
                </n-link>
              </li>
            </ul>
          </div>
        </div>
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
  display: flex;
  flex-direction: column;
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

</style>
