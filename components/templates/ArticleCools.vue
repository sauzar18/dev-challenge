<template>
  <div class="st-cool">
    <count-button
      v-if="datePosts === false"
      src="/images/ic_heart.png"
      alt="いいね"
      :count="count"
      @active-button="isCool"
    />
    <count-button
      v-else-if="datePosts === true"
      src="/images/ic_heart.png"
      alt="いいね"
      :count="count"
      class="active"
      @active-button="isUnCool"
    />
    <count-button
      src="/images/ic_unicon.png"
      alt="いいね"
      :count="1"
    />
    <count-button
      src="/images/ic_bookmark.png"
      alt="いいね"
      :count="2"
    />
  </div>
</template>
<script>
import CountButton from '~/components/parts/CountButton.vue'
export default {
  components: {
    CountButton
  },
  props: {
    cools: {
      type: Array,
      required: true
    },
    articleId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      cool: this.cools,
      upError: null
    }
  },
  computed: {
    count() {
      return Number(this.cool.length)
    },
    datePosts() {
      const date = this.cool
      const id = this.articleId
      let userid
      let newLine
      if (this.$auth.$state.user) {
        userid = this.$auth.$state.user.id
        newLine = date.filter(function (item, index) {
          if (item.article_id === id && item.user_id === userid) return true
        })
      }
      if (newLine[0]) return true
      else return false
    }
  },
  methods: {
    async isCool() {
      await this.$axios.$post('/api/cool', {
        article: this.articleId,
        user: this.$auth.$state.user.id,
        _csrf: this.$store.state.csrfToken
      })
        .then((result) => {
          this.cool.push({ article_id: this.articleId, user_id: this.$auth.$state.user.id })
        })
        .catch((err) => {
          this.upError = err
        })
    },
    async isUnCool() {
      await this.$axios.$post('/api/coolDelete', {
        article: this.articleId,
        user: this.$auth.$state.user.id,
        _csrf: this.$store.state.csrfToken
      })
        .then((result) => {
          const art = this.articleId
          let id
          if (this.$auth.$state.user.id) {
            id = this.$auth.$state.user.id
          }
          const list = this.cool.filter(function (row, index) {
            return (row.article_id !== art || row.user_id !== id)
          })
          this.cool = list
        })
        .catch((err) => {
          this.upError = err
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.st-cool {
  width: 80px;
}
</style>
