<template>
  <nav>
    <h1>
      <n-link :to="`/${$auth.$state.user.login}`">
        @{{ $auth.$state.user.login }}
      </n-link>
    </h1>
    <ul>
      <li
        v-for="link in links"
        :key="link.id"
      >
        <n-link :to="link.slug">
          {{ link.name }}
        </n-link>
      </li>
      <li>
        <button
          type="button"
          @click="logout"
        >
          Sign Out
        </button>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      links: [
        { id: 0, slug: '#', name: 'DashBoard' },
        { id: 1, slug: '/new', name: 'Write a Post' },
        { id: 2, slug: '#', name: 'Reading List' },
        { id: 3, slug: '#', name: 'Settings' },
        { id: 4, slug: '#', name: 'Key Links' }
      ],
      error: ''
    }
  },
  methods: {
    // ログアウト処理
    async logout() {
      try {
        await this.$auth.logout('github')
      } catch (e) {
        this.error = true
      }
    }
  }
}
</script>
<style lang="scss" scoped>
nav {
  position: absolute;
  top: 39px;
  right: 0;
  width: 230px;
  border-right: none;
  padding: 15px 10px;
  border: 1px solid #dbdee1;
  border-bottom-left-radius: 5px;
  box-shadow: 0px 4px 5px 1px rgba(97,95,95,0.18);
  background-color: #fdf9f3;
  display: none;
  &:hover,
  &:focus {
    display: block;
  }
}
h1 {
  border-bottom: 3px solid #7a7e81;
  color: #000;
  margin-bottom: 5px;
  a {
    font-size: 24px;
  }
}
a {
  padding: 6px 10px;
  display: flex;
  width: 100%;
  color: #000;
  font-size: 18px;
}
button,
a {
  &:hover,
  &:focus {
    background-color: #fcf5ea;
  }
}
button {
  background-color: transparent;
  width: 100%;
  font-size: 18px;
  padding: 6px 10px;
  text-align: left;
}
</style>
