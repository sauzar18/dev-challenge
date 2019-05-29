<template>
  <div class="st-comment">
    <input
      v-if="$auth.$state.user"
      :value="$auth.$state.user.id"
      type="hidden"
      name="user_id"
    >
    <input
      v-if="$auth.$state.user"
      :value="$auth.$state.user.name"
      type="hidden"
      name="user_name"
    >
    <input
      v-if="$auth.$state.user"
      :value="$auth.$state.user.avatar_url"
      type="hidden"
      name="avatar"
    >
    <input
      v-if="$auth.$state.user"
      :value="$auth.$state.user.login"
      type="hidden"
      name="user_tag"
    >
    <textarea
      v-model="internalValue"
      name="comment"
      cols="30"
      rows="10"
      placeholder="Add to the discussion"
    />
    <div
      v-if="children === false"
      class="st-accept"
    >
      <label>
        <input
          v-model="accept"
          type="checkbox"
        >
        I've read the <n-link to="/code-of-conduct">code of conduct</n-link>
      </label>
    </div>
    <div class="st-comment__footer">
      <n-link
        to="/p/editor_guide"
        class="st-icon__button"
      >
        <i>
          <img
            src="~static/images/ic_info.svg"
            alt="editor_guide"
          >
        </i>
      </n-link>
      <button
        type="button"
        class="st-icon__button"
      >
        <i>
          <img
            src="~static/images/ic_upload.svg"
            alt="editor_guide"
          >
        </i>
      </button>
      <div class="st-submit">
        <button
          v-if="children === true"
          type="button"
          @click="isCancel"
          class="st-cancel"
        >
          CANCEL
        </button>
        <button
          type="button"
          class="black"
        >
          PREVIEW
        </button>
        <button
          v-if="accept"
          type="submit"
          class="blue"
        >
          SUBMIT
        </button>
        <button
          v-else
          type="button"
          class="blue"
        >
          SUBMIT
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    },
    children: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      valued: this.value,
      accept: false
    }
  },
  computed: {
    internalValue: {
      get() {
        return this.valued
      },
      set(newVal) {
        if (this.valued !== newVal) {
          this.valued = newVal
          this.$emit('input', newVal)
        }
      }
    }
  },
  methods: {
    isCancel(e) {
      this.$emit('cancel-button', e)
    }
  }
}
</script>
<style lang="scss" scoped>
.st-comment {
  border: 1px solid #dbdbdb;
  background-color: #f5f6f7;
  padding: 15px 15px 5px;
}
.st-comment__footer {
  display: flex;
  align-items: center;
  margin-top: 8px;
}
.st-accept {
  text-align: right;
}
textarea {
  width: 100%;
  border: 1px solid #e8e5e5;
  border-radius: 3px;
  height: 125px;
  padding: 6px;
  font-size: 16px;
  margin-bottom: 2px;
}
label {
  display: inline-flex;
  align-items: center;
  a {
    color: #557de8;
    margin-left: 5px;
  }
}
i {
  display: flex;
  width: 21px;
  height: 21px;
  margin: 0 4px;
  img {
    width: 100%;
    opacity: 0.8;
  }
}
.st-icon__button {
  background-color: transparent;
  &:hover,
  &:focus {
    img {
      opacity: 1;
    }
  }
}
.st-submit {
  margin-left: auto;
  button {
    padding: 5px 12px;
    border-radius: 3px;
    font-size: 13px;
  }
}
.st-cancel {
  color: #ff0000;
  opacity: 0.5;
  font-weight: bold;
  font-size: 12px;
  background-color: transparent;
}
</style>
