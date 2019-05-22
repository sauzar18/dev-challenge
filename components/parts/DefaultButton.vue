<template>
  <n-link :to="link">
    {{ text }}
  </n-link>
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
    }
  }
}
</script>
<style lang="scss" scoped>
a {
  display: flex;
  align-items: center;
  justify-content: center;
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
