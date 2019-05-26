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
      @click="isPreview"
    >
      PREVIEW
    </button>
    <button
      type="button"
      class="st-button"
      @click="isPost('draft')"
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
        @click="isPost('publish')"
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
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: false,
      default: ''
    },
    canonical: {
      type: String,
      required: false,
      default: ''
    },
    series: {
      type: String,
      required: false,
      default: ''
    }
  },
  data() {
    return {
      formError: ''
    }
  },
  methods: {
    isClear() {
      const clear = confirm('Are you sure you want to revert to the previous save?')
      if (clear) {
        localStorage.clear()
        this.$router.go()
      }
    },
    isPreview() {
      this.$emit('active-preview', true)
    },
    async isPost(e) {
      try {
        await this.$store.dispatch('post', {
          id: this.$auth.$state.user.id,
          name: this.$auth.$state.user.name,
          avatar: this.$auth.$state.user.avatar_url,
          usertag: this.$auth.$state.user.login,
          title: this.title,
          tags: this.tags,
          content: this.content,
          cover: this.image,
          canonical: this.canonical,
          series: this.series,
          type: e,
          _csrf: this.$store.state.csrfToken
        }).then(() => this.$router.go('/'))
        this.title = ''
        this.tags = ''
        this.content = ''
        this.image = ''
        this.canonical = ''
        this.series = ''
        this.formError = null
      } catch (e) {
        this.formError = e.message
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
