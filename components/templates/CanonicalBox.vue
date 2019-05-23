<template>
  <div class="st-image">
    <dl>
      <dt>Additional Config/Settings</dt>
      <dd>
        <div class="st-textfield">
          <label for="canonical">Canonical URL</label>
          <input
            id="canonical"
            name="canonical_url"
            type="text"
          >
        </div>
        <p>Change meta tagcanonical_url if this post was first published elsewhere (like your own blog)</p>
        <div class="st-textfield">
          <label for="series">Series Name</label>
          <input
            id="series"
            name="series"
            type="text"
          >
        </div>
        <p>Will this post be part of a series? Give the series a unique name. (Series visible once it has multiple posts)</p>
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
.st-textfield {
  display: flex;
  margin: 0 10px;
}
label {
  width: 180px;
  font-weight: bold;
  color: #fff;
  font-size: 18px;
  background-color: #666666;
  padding: 10px;
  border-radius: 3px 0 0 3px;
  flex-shrink: 0;
  text-align: center;
}
dl {
  margin-bottom: 20px;
}
dt {
  color: #66e2d5;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin: 28px 0;
}
p {
  font-style: italic;
  margin: 7px 20px 28px;
  font-size: 14px;
}
input {
  width: 100%;
  border: none;
  border-radius: 0 3px 3px 0;
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
