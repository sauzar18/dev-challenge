<template>
  <div class="st-image">
    <dl>
      <dt>Cover Image</dt>
      <dd>
        <input
          v-if="remove === false"
          ref="file"
          type="file"
          @change="onChange"
        >
        <div v-else>
          <figure class="st-remove__figure">
            <img
              :src="filepath"
              alt="#"
            >
          </figure>
          <button
            class="st-remove"
            type="button"
            @click="isRemove"
          >
            Remove Cover Image
          </button>
        </div>
        <p v-if="upError">
          {{ upError }}
        </p>
      </dd>
    </dl>
    <dl>
      <dt>Body Images</dt>
      <dd>
        <input
          v-if="pathActive === false"
          ref="file2"
          type="file"
          @change="onChange2"
        >
        <div
          v-else
          class="st-body__upload"
        >
          <dl>
            <dt>Markdown Image:</dt>
            <dd>
              <input
                :value="`![](${filepath})`"
                type="text"
              >
            </dd>
          </dl>
          <dl>
            <dt>Direct URL:</dt>
            <dd>
              <input
                :value="filepath"
                type="text"
              >
            </dd>
          </dl>
        </div>
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
  props: {
    remove: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      filepath: '',
      filepath2: '',
      image: '',
      uploadFile: '',
      uploadFile2: '',
      upError: '',
      pathActive: false
    }
  },
  watch: {
    filepath(newName) {
      localStorage.filepath = newName
    },
    image(newName) {
      localStorage.image = newName
    }
  },
  mounted() {
    if (localStorage.filepath) {
      this.filepath = localStorage.filepath
    }
    if (localStorage.image && !this.value) {
      this.image = localStorage.image
    }
  },
  methods: {
    isDone() {
      this.$emit('done-button', false)
    },
    onChange(e) {
      const file = e.target.files[0]
      const uploadedFiles = this.$refs.file.files || this.$refs.file.dataTransfer.files
      this.uploadFile = uploadedFiles[0]
      if (file) {
        this.filepath = `/upload/${this.uploadFile.name}`
      }
      const formData = new FormData()
      formData.set('fileupload', this.filepath)
      formData.append('thumbnail', this.uploadFile)
      const config = {
        headers: {
          'content-type': 'multipart/form-data',
          'Authorization': 'Bearer ' + this.$store.state.csrfToken,
          'X-CSRF-TOKEN': this.$store.state.csrfToken
        }
      }
      this.$axios.$post('/api/fileupload', formData, config)
        .then(function () {
          return 'success'
        })
        .then(() => this.$emit('uploaded-button', this.filepath))
        .catch(error => (this.upError = error.response.data.error))
    },
    onChange2(e) {
      const file = e.target.files[0]
      const uploadedFiles = this.$refs.file2.files || this.$refs.file2.dataTransfer.files
      this.uploadFile2 = uploadedFiles[0]
      if (file) {
        this.filepath2 = `/upload/${this.uploadFile.name}`
      }
      const formData = new FormData()
      formData.set('fileupload', this.filepath2)
      formData.append('thumbnail', this.uploadFile2)
      const config = {
        headers: {
          'content-type': 'multipart/form-data',
          'Authorization': 'Bearer ' + this.$store.state.csrfToken,
          'X-CSRF-TOKEN': this.$store.state.csrfToken
        }
      }
      this.$axios.$post('/api/fileupload', formData, config)
        .then(function () {
          return 'success'
        })
        .then(() => (this.pathActive = true))
        .catch(error => (this.upError = error.response.data.error))
    },
    async isRemove() {
      try {
        await this.$store.dispatch('removeFile', {
          filepath: this.filepath
        }).then(() => this.$emit('done-button', false))
        this.upError = null
      } catch (e) {
        this.upError = e.message
      }
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
.st-remove {
  background-color: #FF0000;
  color: #fff;
  font-weight: bold;
  padding: 4px 10px;
  font-size: 14px;
  border-radius: 3px;
  display: block;
  margin: 0 auto;
}
.st-remove__figure {
  width: 200px;
  height: 84px;
  margin: 10px auto;
  border-radius: 8px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}
.st-body__upload {
  dt {
    color: #fff;
    font-size: 20px;
  }
  input {
    display: block;
    width: calc(100% - 270px);
    margin: 20px auto 0px;
    padding: 10px 20px;
    border-radius: 3px;
    border: none;
    font-size: 18px;
  }
}
</style>
