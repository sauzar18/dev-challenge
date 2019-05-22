<template>
  <n-link
    :to="link"
    class="green"
  >
    {{ text }}
  </n-link>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  },
  methods: {
    isEvent() {
      this.$emit('active-button')
    }
  }
}
</script>
<style lang="scss" scoped>
a {
  width: 118px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #0a0a0a;
  color: #0a0a0a;
  border-radius: 3px;
  font-size: 14px;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
}
</style>
