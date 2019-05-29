<template>
  <section>
    <h1>Join DEV</h1>
    <div>
      <default-button
        link="#"
        text="Sign In With Twitter"
        class="st-button"
      />
      <default-button
        link="#"
        text="Sign In With GitHub"
        :anker="false"
        class="st-button"
        @login="LoginGitHub"
      />
    </div>
  </section>
</template>
<script>
import DefaultButton from '~/components/parts/DefaultButton.vue'
export default {
  components: {
    // コンポーネントを登録
    DefaultButton
  },
  data() {
    return {
      error: null
    }
  },
  methods: {
    // login 処理
    async LoginGitHub() {
      try {
        await this.$auth.loginWith('github')
      } catch (e) {
        this.error = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  border: 1px solid #003ee6;
  box-shadow: 5px 6px 0px #0030b3;
  border-radius: 3px;
  margin-bottom: 20px;
}
h1 {
  background-color: #003ee6;
  color: #fff;
  height: 52px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.st-button {
  height: 57px;
  color: #000;
  background-color: #dee4ff;
  font-size: 16px;
  &:first-child {
    margin-bottom: 20px;
  }
}
div {
  padding: 20px;
}
</style>
