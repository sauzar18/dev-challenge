<template>
  <div class="st-mylink">
    <n-link :to="'/' + $auth.$state.user.login">
      <i class="st-icon">
        <img
          :src="$auth.$state.user.avatar_url"
          :alt="$auth.$state.user.name"
        >
      </i>
      <div>
        <p><strong>{{ $auth.$state.user.name }}</strong></p>
        <p>@{{ $auth.$state.user.login }}</p>
      </div>
    </n-link>
  </div>
</template>
<style lang="scss" scoped>
.st-mylink {
  margin-bottom: 14px;
}
a {
  display: flex;
  align-items: center;
  padding: 0 12px;
  color: #000;
  border: 1px solid #d6d6d6;
  box-shadow: 1px 1px 0px #c2c2c2;
  height: 68px;
  border-radius: 3px;
  &:hover,
  &:focus {
    background-color: #F5F6F7;
  }
}
p {
  font-size: 13px;
  color: #666;
}
strong {
  font-size: 16px;
  font-weight: normal;
  color: #000;
}
</style>
