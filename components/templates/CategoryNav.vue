<template>
  <nav>
    <h1>design your experience</h1>
    <ul>
      <li
        v-for="cat in categories"
        :key="cat.id"
      >
        <n-link
          :to="`/t/${cat.slug}`"
          class="st-link"
        >
          #{{ cat.name }}
        </n-link>
        <a
          href="#"
          class="st-follow green"
        >
          + FOLLOW
        </a>
      </li>
    </ul>
    <div class="st-bottom">
      <n-link to="/tags">
        View all-time top tags
      </n-link>
    </div>
  </nav>
</template>
<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
nav {
  width: 276px;
  background-color: #fff;
  box-shadow: 1px 1px 0px #c2c2c2;
  border-radius: 3px;
  border: 1px solid #d6d6d6;
  height: 506px;
  overflow: auto;
}
h1 {
  color: #666666;
  text-decoration: underline;
  font-weight: normal;
  font-size: 16px;
  height: 42px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  position: sticky;
  top: 0;
  background-color: #fff;
}
a {
  display: flex;
  align-items: center;
  justify-content: center;
}
li {
  display: flex;
  align-items: center;
  position: relative;
}
.st-link {
  width: 100%;
  height: 30px;
  padding: 0 10px;
  color: #000;
  font-size: 18px;
  font-weight: bold;
  justify-content: flex-start;
  &:hover,
  &:focus {
    background-color: #f5f6f7;
    + .st-follow {
      display: flex;
    }
  }
}
.st-follow {
  width: 68px;
  border-radius: 3px;
  font-weight: bold;
  font-size: 12px;
  letter-spacing: -0.1em;
  height: 24px;
  color: #000;
  display: none;
  position: absolute;
  right: 4px;
  &:hover,
  &:focus {
    display: flex;
  }
}
.st-bottom {
  position: sticky;
  bottom: 0;
  background-color: #eaecee;
  height: 42px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  a {
    color: #000;
    font-weight: bold;
  }
}
</style>
