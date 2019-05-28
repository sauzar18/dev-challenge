<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
html {
  font-family: -apple-system, BlinkMacSystemFont, 'Source Sans Pro', 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: #0a0a0a;
  background-color: #F9F9FA;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}
button {
  border: none;
  cursor: pointer;
}
main {
  display: block;
}
.st-main {
  padding-top: 44px;
}
li {
  list-style: none;
}
.beige {
  background-color: #fdf9f3;
}
.black {
  background-color: #0a0a0a;
  color: #fff;
}
.green {
  background-color: #66e2d5;
}
.blue {
  background-color: #0d36ff;
  color: #fff;
}
a.blue,
button.blue {
  &:hover,
  &:focus {
    background-color: #0023cf;
  }
}
a.black,
button.black {
  &:hover,
  &:focus {
    background-color: rgb(34, 34, 34);
  }
}
.st-icon {
  display: flex;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 8px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}
.st-article__content {
  img {
    width: 100%;
  }
  h1,
  h2,
  h3 {
    font-size: 32px;
    margin: 40px auto 20px;
    font-weight: normal;
  }
  p {
    margin: 0.95em 0 1.2em;
  }
  ul {
    margin: 0.8em 0.7em 0.8em 1.9em;
  }
  li {
    margin: 0.3em auto;
    list-style: square;
  }
}
.st-size {
  width: 81%;
  max-width: 710px;
  margin: 0 auto;
}
</style>
