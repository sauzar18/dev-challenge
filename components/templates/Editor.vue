<template>
  <div class="st-editor">
    <input
      v-model="article_title"
      type="text"
      name="article_title"
      placeholder="Title"
      class="st-title"
    >
    <div class="st-category">
      <input
        v-model="tags"
        type="text"
        name="tags"
        placeholder="tags"
        class="st-tag"
      >
      <button
        type="button"
        class="st-detail"
        @click="isActive = true"
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
        @click="isActive2 = true"
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
      v-model="content"
      class="st-content"
      name="article"
      cols="30"
      rows="10"
      placeholder="Body Markdown"
    />
    <upload-box
      :class="{ active: isActive }"
      class="st-modal"
      @change-cover="isCover"
      @done-button="isDone"
    />
    <canonical-box
      :class="{ active: isActive2 }"
      class="st-modal"
      @change-canonical="isCanonical"
      @change-series="isSeries"
      @done-button="isDone2"
    />
    <editor-footer
      :title="article_title"
      :tags="tags"
      :content="content"
      :image="cover_image"
      :canonical="canonical"
      :series="series"
    />
  </div>
</template>
<script>
import UploadBox from '~/components/templates/UploadBox.vue'
import CanonicalBox from '~/components/templates/CanonicalBox.vue'
import EditorFooter from '~/components/templates/EditorFooter.vue'
export default {
  components: {
    UploadBox,
    EditorFooter,
    CanonicalBox
  },
  data() {
    return {
      isActive: false,
      isActive2: false,
      article_title: '',
      tags: [],
      content: '',
      cover_image: '',
      canonical: '',
      series: ''
    }
  },
  watch: {
    article_title(newValue) {
      localStorage.article_title = newValue
    },
    tags(newValue) {
      localStorage.tags = newValue
    },
    content(newValue) {
      localStorage.content = newValue
    }
  },
  mounted() {
    if (localStorage.article_title) {
      this.article_title = localStorage.article_title
    }
    if (localStorage.tags) {
      this.tags = localStorage.tags
    }
    if (localStorage.content) {
      this.content = localStorage.content
    }
  },
  methods: {
    isDone(e) {
      this.isActive = e
    },
    isDone2(e) {
      this.isActive2 = e
    },
    isCover(e) {
      this.cover_image = e
    },
    isCanonical(e) {
      this.canonical = e
    },
    isSeries(e) {
      this.series = e
    }
  }
}
</script>
<style lang="scss" scoped>
button {
  &:focus {
    outline: none;
  }
}
.st-editor {
  width: 860px;
  background-color: #fff;
  border: 1px solid #cecece;
  margin: 26px auto 40px;
  border-radius: 3px;
  padding: 0 20px;
  box-shadow: 1px 1px 0px #c2c2c2;
  position: relative;
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
  height: calc(90vh - 280px);
  width: 100%;
  border: none;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
  &:focus {
    outline: none;
  }
}
.st-modal {
  display: none;
  &.active {
    display: block;
    overflow: auto;
  }
}
</style>
