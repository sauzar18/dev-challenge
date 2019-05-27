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
}
span {
  display: flex;
  align-items: center;
}
i {
  height: 28px;
  width: 28px;
  padding: 7px;
  display: flex;
  align-items: center;
}
img {
  width: 100%;
}
</style>
