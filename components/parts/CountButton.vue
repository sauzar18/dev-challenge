<template>
  <button
    type="button"
    @click="isButton"
  >
    <span>
      <i>
        <img
          :src="src"
          :alt="alt"
        >
      </i>
      {{ count }}
    </span>
  </button>
</template>
<script>
export default {
  // propsで親要素からデータを取得その際に型を定義
  props: {
    count: {
      type: Number,
      required: true
    },
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  },
  methods: {
    // emitで親要素のクリックイベントを取得
    isButton() {
      this.$emit('active-button')
    }
  }
}
</script>
<style lang="scss" scoped>
button {
  width: 100%;
  background-color: transparent;
  margin-bottom: 20px;
  &:hover,
  &:focus {
    i {
      box-shadow: 0px 0px 0px 2px #cfd7ff;
    }
  }
}
span {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
}
i {
  height: 28px;
  width: 28px;
  padding: 4px;
  display: flex;
  align-items: center;
  margin-right: 12px;
  border-radius: 50%;
  background-color: #EDEEF0;
  transition: 0.2s all;
}
img {
  width: 100%;
}
.active {
  i {
    box-shadow: 0px 0px 0px 2px #ffc0d3;
    background: linear-gradient(111deg, #ffb4cb, #ff80a8);
  }
}
</style>
