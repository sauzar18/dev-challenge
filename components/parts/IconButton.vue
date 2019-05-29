<template>
  <n-link
    :to="link"
    :title="alt"
  >
    <i>
      <img
        :src="path"
        :alt="alt"
      >
    </i>
  </n-link>
</template>
<script>
export default {
  // propsで親要素からデータを取得その際に型を定義
  props: {
    link: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
i {
  display: flex;
  align-items: center;
  height: 30px;
}
img {
  height: 100%;
}
</style>
