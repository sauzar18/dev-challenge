<template>
  <ul class="st-return">
    <comment-list
      v-for="comment in parentComment"
      :key="comment.id"
      :item="comment"
    />
  </ul>
</template>
<script>
import CommentList from '~/components/templates/CommentList.vue'
export default {
  // コンポーネントを登録
  components: {
    CommentList
  },
  data() {
    return {
      // listをstoreから取得
      lists: this.$store.state.comment
    }
  },
  computed: {
    // 親要素を取得する
    parentComment() {
      let list = this.lists
      list = list.filter(function (row) {
        if (row.parent_id !== 0) {
          return false
        }
        return row
      })
      return list
    }
  }
}
</script>
