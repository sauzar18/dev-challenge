<template>
  <div class="st-image">
    <dl>
      <dt>Cover Image</dt>
      <dd>
        <input
          ref="file"
          type="file"
        >
      </dd>
    </dl>
    <dl>
      <dt>Body Images</dt>
      <dd>
        <input
          ref="file2"
          type="file"
        >
      </dd>
    </dl>
    <button
      type="button"
      class="st-button"
      @click="isDone"
    >
      Done
    </button>
    <button
      type="button"
      class="st-close"
      @click="isDone"
    >
      ×
    </button>
  </div>
</template>
<script>
export default {
  methods: {
    isDone() {
      this.$emit('done-button', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.st-image {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #333333;
  color: #fff;
  padding: 4%;
}
dt {
  color: #66e2d5;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin: 28px 0;
}
input[type='file'] {
  width: 90%;
  background: #0a0a0a;
  padding: 20px;
  border-radius: 3px;
  margin: 20px auto;
  display: block;
  cursor: pointer;
}
.st-button {
  display: block;
  font-size: 22px;
  background: #66e2d5;
  color: #0a0a0a;
  padding: 10px 40px;
  margin: 20px auto;
  border-radius: 3px;
  font-weight: bold;
}
.st-close {
  position: absolute;
  left: 1%;
  top: 0;
  font-size: 37px;
  background-color: transparent;
  color: #fff;
  font-weight: bold;
  padding: 4px 10px;
  &:focus {
    outline: none;
  }
}
</style>
