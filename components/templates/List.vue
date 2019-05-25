<template>
  <ul>
    <li
      v-for="(post, i) in posts"
      :key="post.id"
    >
      <article>
        <header>
          <h1>{{ post.title }}</h1>
          <figure v-if="i === 0">
            <img
              :src="post.cover_image"
              :alt="post.title"
            >
          </figure>
        </header>
      </article>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
figure {
  width: 100%;
  img {
    width: 100%;
  }
}
li {
  border: 1px solid #d6d6d6;
  border-radius: 3px;
  box-shadow: 1px 1px 0px #c2c2c2;
  margin: 10px auto 0px;
  background-color: #fff;
  overflow: hidden;
  &:first-child {
    h1 {
      font-size: 48px;
    }
  }
}
h1 {
  font-size: 32px;
  margin: 8px 12px;
  order: 2;
}
header {
  display: flex;
  flex-direction: column;
}
</style>
