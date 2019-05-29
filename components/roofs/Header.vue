<template>
  <header class="beige">
    <div class="inner">
      <logo class="st-space__right" />
      <search class="st-search" />
      <div class="st-button__group">
        <button-post
          text="WRITE A POST"
          link="/new"
          class="st-space__left"
        />
        <icon-button
          link="/connect"
          path="/images/ic_connect.svg"
          alt="Connect"
          class="st-space__left"
        />
        <icon-button
          link="/notifications"
          path="/images/ic_notifications.svg"
          alt="Notifications"
          class="st-space__left"
        />
        <icon-thumbnail
          class="st-space__left"
          @active-button="MenuActive"
        />
        <menu-content
          v-if="$auth.$state.user"
          :class="{ active: isActive }"
          class="st-menu"
        />
        <div
          class="st-hidden"
          @click="isActive = false"
        />
      </div>
    </div>
  </header>
</template>
<script>
import Logo from '~/components/parts/Logo.vue'
import Search from '~/components/parts/Search.vue'
import ButtonPost from '~/components/parts/ButtonPost.vue'
import IconButton from '~/components/parts/IconButton.vue'
import IconThumbnail from '~/components/parts/IconThumbnail.vue'
import MenuContent from '~/components/roofs/Menu.vue'
export default {
  // コンポーネントを登録
  components: {
    Logo,
    Search,
    ButtonPost,
    IconButton,
    IconThumbnail,
    MenuContent
  },
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    // menuを開く際の処理
    MenuActive() {
      this.isActive = true
    }
  }
}
</script>
<style lang="scss" scoped>
header {
  height: 44px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0,0,0,0.2);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
}
.inner {
  width: 1250px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.st-button__group {
  display: flex;
  align-items: center;
  position: relative;
}
.st-space__left {
  margin-right: 20px;
  &:hover,
  &:focus {
    + .st-menu {
      display: block;
    }
  }
}
.st-menu.active {
  display: block;
  z-index: 1;
  + .st-hidden {
    position: fixed;
    display: block;
    top: 44px;
    left: 0;
    width: 100%;
    height: calc(100% - 44px);
    z-index: -1;
    background-color: rgba(0,0,0,0.6);
  }
}
.st-space__right {
  margin-left: 2%;
}
.st-search {
  margin-left: auto;
  margin-right: 100px;
}
</style>
