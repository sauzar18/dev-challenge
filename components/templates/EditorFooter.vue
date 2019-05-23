<template>
  <div class="st-flex">
    <button
      type="button"
      class="st-button"
    >
      ?
    </button>
    <button
      type="button"
      class="st-button"
    >
      PREVIEW
    </button>
    <button
      type="button"
      class="st-button"
    >
      SAVE DRAFT
    </button>
    <div>
      <p v-if="title || tags.toString() || content">
        New Changes(
        <button
          type="button"
          @click="isClear"
        >
          Clear
        </button>
        )
      </p>
      <button
        type="button"
        class="st-button st-publish"
      >
        PUBLISH
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  },
  methods: {
    isClear() {
      const clear = confirm('Are you sure you want to revert to the previous save?')
      if (clear) {
        localStorage.clear()
        this.$router.go()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.st-flex {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 83px;
  border-top: 1px solid #dbdbdb;
  background-color: #fff;
}
.st-button {
  padding: 6px 13px;
  background-color: #f5f6f7;
  box-shadow: 2px 2px 8px #bababa;
  color: #666666;
  font-size: 15px;
  margin: 0 8px;
  border-radius: 50px;
  min-width: 45px;
}
p {
  font-size: 11px;
  font-style: italic;
  color: #666;
  margin: -10px 4px 2px;
  button {
    background-color: transparent;
    font-size: 11px;
    font-style: italic;
    color: #666;
    text-decoration: underline;
  }
}
.st-publish {
  background-color: #0045ff;
  color: #fff;
}
</style>
