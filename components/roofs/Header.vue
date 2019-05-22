<template>
  <header class="beige">
    <div class="inner">
      <logo class="st-space__right" />
      <search />
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
        <icon-thumbnail class="st-space__left" />
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
export default {
  components: {
    Logo,
    Search,
    ButtonPost,
    IconButton,
    IconThumbnail
  },
  data() {
    return {
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
}
.st-space__left {
  margin-right: 15px;
}
.st-space__right {
  margin-left: 15px;
}
</style>
