<template>
  <button
    type="button"
    @click="childAction"
  >
    <i>
      <img
        src="#"
        alt="お名前"
      >
    </i>
  </button>
</template>
<script>
export default {
  methods: {
    childAction() {
      this.$emit('active-button')
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #ddd;
}
</style>
