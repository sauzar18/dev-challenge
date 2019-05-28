<template>
  <li>
    <button
      type="button"
      class="st-toggle"
      @click="isToggle"
    >
      <span>
        <i>▼</i>
        <span class="st-close__message">
          {{ item.user_name }} + {{ childComment(item.id).length }} replies
        </span>
      </span>
    </button>
    <div class="st-list">
      <div class="st-list__top">
        <n-link
          :to="`/${item.user_tag}`"
          class="st-author"
        >
          <i class="st-icon">
            <img
              :src="item.user_avatar"
              :alt="item.user_name"
            >
          </i>
          <p>{{ item.user_name }}</p>
        </n-link>
        <n-link
          v-if="item.user_tag"
          :to="`https://github.com/${item.user_tag}`"
          class="st-sns"
        >
          <i>
            <img
              src="~static/images/ic_github.svg"
              alt="Github"
            >
          </i>
        </n-link>
        <span
          v-if="item.user_id === $store.state.article.user_id"
          class="st-author__tag"
        >
          Author
        </span>
        <div class="st-list__head">
          <time :datetime="item.created_at">
            {{ item.created_at | moment }}
          </time>
          <button type="button">
            <i>
              <img
                src="~static/images/ic_dots.svg"
                alt="menu"
              >
            </i>
          </button>
        </div>
      </div>
      <p class="st-comment">
        {{ item.comment }}
      </p>
      <div class="st-comment__footer">
        <div class="st-comment__button">
          <button
            v-if="datePosts(item.id) === false"
            type="button"
            class="st-cool"
            @click="isCool(item.id)"
          >
            <i>
              <img
                src="~static/images/ic_heart_outline.svg"
                alt="cool"
              >
            </i>
            <span>{{ count(item.id) }}</span>
          </button>
          <button
            v-else-if="datePosts(item.id) === true"
            type="button"
            class="st-cool"
            @click="isUnCool(item.id)"
          >
            <i>
              <img
                src="~static/images/ic_heart.png"
                alt="cool"
              >
            </i>
            <span>{{ count(item.id) }}</span>
          </button>
          <button
            type="button"
            class="st-reply"
            @click="isReply"
          >
            REPLY
          </button>
        </div>
        <form
          action="/api/comment"
          method="POST"
        >
          <input
            :value="item.id"
            type="hidden"
            name="parent_id"
          >
          <input
            :value="$store.state.article.id"
            type="hidden"
            name="article_id"
          >
          <comment
            v-model="child_comment"
            :children="true"
            @cancel-button="isReply2"
          />
        </form>
      </div>
    </div>
    <ul
      v-if="childComment(item.id).toString()"
      class="st-child__comment"
    >
      <li
        v-for="child in childComment(item.id)"
        :key="child.id"
      >
        <button
          type="button"
          class="st-toggle"
          @click="isToggle"
        >
          <span>
            <i>▼</i>
            <span class="st-close__message">
              {{ child.user_name }}
              <span v-if="childComment(child.id).length > 0">
                 + {{ childComment(child.id).length }} replies
              </span>
            </span>
          </span>
        </button>
        <div class="st-list">
          <div class="st-list__top">
            <n-link
              :to="`/${child.user_tag}`"
              class="st-author"
            >
              <i class="st-icon">
                <img
                  :src="child.user_avatar"
                  :alt="child.user_name"
                >
              </i>
              <p>{{ child.user_name }}</p>
            </n-link>
            <n-link
              v-if="child.user_tag"
              :to="`https://github.com/${child.user_tag}`"
              class="st-sns"
            >
              <i>
                <img
                  src="~static/images/ic_github.svg"
                  alt="Github"
                >
              </i>
            </n-link>
            <span
              v-if="child.user_id === $store.state.article.user_id"
              class="st-author__tag"
            >
              Author
            </span>
            <div class="st-list__head">
              <time :datetime="child.created_at">
                {{ child.created_at | moment }}
              </time>
              <button type="button">
                <i>
                  <img
                    src="~static/images/ic_dots.svg"
                    alt="menu"
                  >
                </i>
              </button>
            </div>
          </div>
          <p class="st-comment">
            {{ child.comment }}
          </p>
          <div class="st-comment__footer">
            <div class="st-comment__button">
              <button
                v-if="datePosts(child.id) === false"
                type="button"
                class="st-cool"
                @click="isCool(child.id)"
              >
                <i>
                  <img
                    src="~static/images/ic_heart_outline.svg"
                    alt="cool"
                  >
                </i>
                <span>{{ count(child.id) }}</span>
              </button>
              <button
                v-else-if="datePosts(child.id) === true"
                type="button"
                class="st-cool"
                @click="isUnCool(child.id)"
              >
                <i>
                  <img
                    src="~static/images/ic_heart.png"
                    alt="cool"
                  >
                </i>
                <span>{{ count(child.id) }}</span>
              </button>
              <button
                type="button"
                class="st-reply"
                @click="isReply"
              >
                REPLY
              </button>
            </div>
            <form
              action="/api/comment"
              method="POST"
            >
              <input
                :value="child.id"
                type="hidden"
                name="parent_id"
              >
              <input
                :value="$store.state.article.id"
                type="hidden"
                name="article_id"
              >
              <comment
                v-model="child_comment2"
                :children="true"
                @cancel-button="isReply2"
              />
            </form>
          </div>
        </div>
      </li>
    </ul>
  </li>
</template>
<script>
import moment from 'moment'
import Comment from '~/components/parts/Comment.vue'
export default {
  components: {
    Comment
  },
  filters: {
    moment(date) {
      return moment(date).format('MMM DD')
    }
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      lists: this.$store.state.comment,
      child_comment: '',
      child_comment2: '',
      likes: this.$store.state.like,
      upError: ''
    }
  },
  methods: {
    isToggle(e) {
      e.currentTarget.parentNode.classList.toggle('close')
    },
    isReply(e) {
      e.currentTarget.parentNode.parentNode.classList.toggle('reply')
    },
    isReply2(e) {
      e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.classList.toggle('reply')
    },
    datePosts(id) {
      const date = this.likes
      let userid
      let newLine
      if (this.$auth.$state.user) {
        userid = this.$auth.$state.user.id
        newLine = date.filter(function (item, index) {
          if (item.comment_id === id && item.user_id === userid) return true
        })
      }
      if (newLine[0]) return true
      else return false
    },
    childComment(id) {
      let list = this.lists
      list = list.filter(function (row) {
        if (row.parent_id !== id) {
          return false
        }
        return row
      })
      return list
    },
    count(id) {
      let list = this.likes
      list = list.filter(function (row) {
        if (row.comment_id !== id) {
          return false
        }
        return row
      })
      return Number(list.length)
    },
    async isCool(e) {
      await this.$axios.$post('/api/like', {
        comment: e,
        user: this.$auth.$state.user.id,
        _csrf: this.$store.state.csrfToken
      })
        .then((result) => {
          this.likes.push({ comment_id: e, user_id: this.$auth.$state.user.id })
        })
        .catch((err) => {
          this.upError = err
        })
    },
    async isUnCool(e) {
      await this.$axios.$post('/api/likeDelete', {
        comment: e,
        user: this.$auth.$state.user.id,
        _csrf: this.$store.state.csrfToken
      })
        .then((result) => {
          let id
          if (this.$auth.$state.user.id) {
            id = this.$auth.$state.user.id
          }
          const list = this.likes.filter(function (row, index) {
            return (row.comment_id !== e || row.user_id !== id)
          })
          this.likes = list
        })
        .catch((err) => {
          this.upError = err
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.st-close__message {
  font-style: oblique;
  margin-left: 8px;
  display: none;
}
i {
  font-style: normal;
}
li.close {
  .st-toggle {
    i {
      transform: rotate(28deg);
    }
  }
  .st-close__message {
    display: flex;
  }
  .st-list {
    display: none;
  }
}
.st-list {
  border: 1px solid #dbdbdb;
  padding: 10px 1.5%;
}
.st-list__top {
  display: flex;
  align-items: center;
  position: relative;
}
.st-author {
  display: flex;
  align-items: center;
  color: #000;
}
.st-icon {
  width: 33px;
  height: 33px;
}
.st-sns {
  margin-left: 6px;
  i {
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
  }
  img {
    width: 100%;
  }
}
time {
  color: #666666;
  font-size: 12px;
}
.st-list__head {
  display: flex;
  align-items: center;
  position: absolute;
  top: 0px;
  right: 10px;
  i {
    height: 18px;
    display: flex;
    margin-left: 10px;
    img {
      height: 100%;
      opacity: 0.8;
    }
  }
}
.st-comment {
  margin: 20px auto;
  font-size: 18px;
}
.st-toggle {
  width: 100%;
  text-align: left;
  color: #7A7A7A;
  font-size: 14px;
  padding: 10px 0px;
  &:focus {
    outline: none;
  }
  > span {
    display: flex;
  }
}
.st-author__tag {
  background-color: #cfd7ff;
  color: #0a0a0a;
  padding: 2px 6px 2px;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: -0.05em;
  margin-left: 8px;
}
.st-cool {
  display: flex;
  align-items: center;
  i {
    display: flex;
    align-items: center;
    margin-right: 10px;
  }
  span {
    background-color: #f5f6f7;
    padding: 1px 5px;
    border-radius: 3px;
    border: 1px solid #d9dde0;
    margin-left: 1px;
  }
  img {
    width: 21px;
    opacity: 0.62;
  }
  &:hover,
  &:focus {
    img {
      opacity: 1;
    }
  }
}
.st-comment__button {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.st-reply {
  font-size: 14px;
  font-weight: bold;
  color: #557de8;
}
.st-comment__footer {
  form {
    display: none;
  }
  &.reply {
    .st-comment__button {
      display: none;
    }
    form {
      display: block;
    }
  }
}
.st-child__comment {
  margin-top: 8px;
  li {
    display: flex;
    align-items: flex-start;
  }
  .st-toggle {
    width: 24px;
  }
  .st-list {
    width: calc(100% - 24px);
  }
  .close {
    .st-toggle {
      width: 100%;
    }
  }
}

</style>
