<template>
  <div class="st-cool">
    <count-button
      src="/images/ic_heart.png"
      alt="いいね"
      :count="1"
    />
    <count-button
      src="/images/ic_unicon.png"
      alt="いいね"
      :count="1"
    />
    <count-button
      src="/images/ic_bookmark.png"
      alt="いいね"
      :count="2"
    />
  </div>
</template>
<script>
import CountButton from '~/components/parts/CountButton.vue'
export default {
  components: {
    CountButton
  }
}
</script>
<style lang="scss" scoped>
.st-cool {
  width: 156px;
}
</style>
