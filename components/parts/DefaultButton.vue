<template>
  <n-link
    v-if="anker === true"
    :to="link"
  >
    {{ text }}
  </n-link>
  <button
    v-else
    type="button"
    @click="isAction"
  >
    {{ text }}
  </button>
</template>
<script>
export default {
  props: {
    link: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    anker: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  methods: {
    isAction() {
      this.$emit('login')
    }
  }
}
</script>
<style lang="scss" scoped>
a {
  display: flex;
  align-items: center;
  justify-content: center;
}
a,
button {
  border-radius: 100px;
  border: 2px solid #1b4bcb;
  width: 100%;
  margin: 0 auto;
  font-weight: bold;
  letter-spacing: -0.05em;
  &:hover,
  &:focus {
    text-decoration: underline;
  }
}
</style>
