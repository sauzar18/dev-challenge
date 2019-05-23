<template>
  <div class="st-editor">
    <input
      type="text"
      name="article_title"
      placeholder="Title"
      class="st-title"
    >
    <div class="st-category">
      <input
        type="text"
        name="tags"
        placeholder="tags"
        class="st-tag"
      >
      <button
        type="button"
        class="st-detail"
        @click="isActive"
      >
        <i>
          <img
            src="~static/images/ic_picture.svg"
            alt="Image Uploads"
          >
        </i>
      </button>
      <button
        type="button"
        class="st-detail"
        @click="isActive2"
      >
        <i>
          <img
            src="~static/images/ic_dots.svg"
            alt="Additional Config"
          >
        </i>
      </button>
    </div>
    <textarea
      class="st-content"
      name="article"
      cols="30"
      rows="10"
      placeholder="Body Markdown"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: false,
      isActive2: false
    }
  }
}
</script>
<style lang="scss" scoped>
.st-editor {
  width: 860px;
  background-color: #fff;
  border: 1px solid #cecece;
  margin: 26px auto 40px;
  border-radius: 3px;
  padding: 0 20px;
  box-shadow: 1px 1px 0px #c2c2c2;
}
input {
  border: none;
  width: 100%;
  &:focus {
    outline: none;
  }
}
.st-title {
  font-size: 34px;
  padding: 20px 0px 15px;
}
.st-tag {
  border-radius: 100px;
  padding: 8px 8px 7px 17px;
  font-size: 16px;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
  background-color: #f5f6f7;
  font-weight: bold;
  margin-right: 10px;
}
.st-category {
  display: flex;
}
.st-detail {
  width: 60px;
  border-radius: 50px;
  background-color: #efefef;
  margin-left: 5px;
  flex-shrink: 0;
  &:hover {
    background-color: #e9ecff;
  }
  i {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 18px;
  }
}
.st-content {
  font-size: 18px;
  padding: 20px 6px;
  height: 280px;
  width: 100%;
  border: none;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
  &:focus {
    outline: none;
  }
}
</style>
