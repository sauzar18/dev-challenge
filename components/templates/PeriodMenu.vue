<template>
  <nav aria-label="Period Menu">
    <ul>
      <li
        v-for="item in menus"
        :key="item.id"
      >
        <period-link
          :link="item.link"
          :name="item.name"
        />
      </li>
    </ul>
  </nav>
</template>
<script>
import PeriodLink from '~/components/parts/PeriodLink.vue'
export default {
  // コンポーネントを登録
  components: {
    PeriodLink
  },
  // propsで親要素からデータを取得その際に型を定義
  props: {
    menus: {
      type: Array,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
nav {
  width: 60%;
  height: 45px;
  display: flex;
  align-items: center;
  margin: 0 auto;
}
ul {
  display: flex;
  justify-content: space-between;
}
li {
  display: flex;
  align-items:  center;
  &:first-child {
    &::after {
      content: '';
      display: inline-block;
      margin: 0px 10px;
      height: 15px;
      width: 2px;
      background-color: #dbdbdb;
    }
  }
  &:last-child {
    &::before {
      content: '';
      display: inline-block;
      margin: 0px 10px;
      height: 15px;
      width: 2px;
      background-color: #dbdbdb;
    }
  }
}
</style>
