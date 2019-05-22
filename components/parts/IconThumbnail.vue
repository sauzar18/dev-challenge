<template>
  <button
    type="button"
    @click="childAction"
  >
    <i>
      <img
        v-if="$store.state.authUser"
        class="st-icon"
        src="#"
        alt="お名前"
      >
      <img
        v-else
        src="~static/images/ic_menu.svg"
        alt="menu"
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
.st-icon {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #ddd;
}
i {
  display: flex;
  align-items: center;
}
img {
  width: 24px;
}
</style>
