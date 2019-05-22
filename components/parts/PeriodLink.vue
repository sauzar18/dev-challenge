<template>
  <n-link :to="link">
    <span>
      {{ name }}
    </span>
  </n-link>
</template>
<script>
export default {
  props: {
    link: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
a {
  padding: 0 8px;
  height: 26px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 2px;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-size: 16px;
  letter-spacing: -0.1em;
  &:hover {
    opacity: 1;
    background: #4e57ef;
    color: white;
    border: 1px solid #cfd7ff;
    box-shadow: 3px 4px 0px #cfd7ff;
  }
  &.nuxt-link-exact-active {
    background: #cfd7ff;
    color: #0a0a0a;
    border: 1px solid #4e57ef;
    box-shadow: 3px 4px 0px #4e57ef;
  }
}
</style>
