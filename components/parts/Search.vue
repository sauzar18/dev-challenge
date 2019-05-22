<template>
  <div class="st-search">
    <form
      action="/search"
      method="GET"
    >
      <input
        v-model="search"
        name="q"
        type="text"
        placeholder="search"
      >
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.st-search {
  width: 490px;
}
input {
  width: 100%;
  background-color: #e8e7e7;
  padding: 6px 9px;
  border: none;
  border-radius: 4px;
  font-size: 15px;
}
</style>
