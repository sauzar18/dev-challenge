<template>
  <section class="st-info">
    <div class="st-info__header">
      <i class="st-icon">
        <img
          :src="author.user_avatar"
          :alt="author.user_name">
      </i>
      <div>
        <h1>{{ author.user_name }}</h1>
        <p>@{{ author.user_tag }}</p>
      </div>
    </div>
    <p class="st-description">We're AWS Obsessed!</p>
    <button
      type="button"
      class="st-button"
    >
      + FOLLOW
    </button>
    <p class="st-message">We are AWS Obsessed and create both free and paid learning material.We have study material for all 10 AWS Certifications on our custom LMS platform with flashcards, white paper summaries, journey paths and exam simulator.</p>
  </section>
</template>
<script>
export default {
  // propsで親要素からデータを取得その際に型を定義
  props: {
    author: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
.st-info {
  padding: 10px 13px;
  border: 1px solid #dd6b29;
  border-radius: 3px;
}
.st-button {
  width: 100%;
  font-size: 18px;
  border: 0px;
  border-radius: 3px;
  padding: 3px;
  height: 44px;
  background-color: #FB7A2F;
  color: #fff;
}
.st-info__header {
  display: flex;
  align-items: center;
}
.st-icon {
  width: 35px;
  height: 35px;
  margin-right: 5px;
}
h1 {
  line-height: 1;
}
.st-description {
  color: #666666;
  font-style: italic;
  padding: 10px 0px 5px;
  font-size: 14px;
}
.st-message {
  border-top: 1px solid #dbdbdb;
  padding: 20px 0px;
  margin-top: 20px;
  color: #0a0a0a;
}
</style>
