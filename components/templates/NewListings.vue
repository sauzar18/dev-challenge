<template>
  <!-- new listing list -->
  <section class="st-listing">
    <div class="st-title">
      <h1>newest listings</h1>
    </div>
    <ul>
      <li
        v-for="list in lists"
        :key="list.id"
      >
        <n-link to="#">
          <span>
            {{ list.tag }}
          </span>
          <p>
            {{ list.title }}
          </p>
        </n-link>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  data() {
    return {
      lists: [
        { id: 0, title: 'Learn how to create and deploy a JavaScript Azure Function using VS Code with this interactive lesson!', tag: 'education' },
        { id: 1, title: 'Laptop stickers: puntastic original art!', tag: 'forsale' },
        { id: 2, title: 'Join the STDIO community nights!', tag: 'misc' },
        { id: 3, title: 'Have stickers on your Laptop? Send me a photo for DevLids.com!', tag: 'collabs' },
        { id: 4, title: 'Pre-Order "Your First Year In Code", a book for new and aspiring developers', tag: 'misc' },
        { id: 5, title: 'DropConfig Version Control and Hosting For Your Config Files.', tag: 'misc' },
        { id: 6, title: '25 years of experience in FE/BE Development, Software Architecture and PO/CxO', tag: 'misc' },
        { id: 7, title: 'OER Library in Afghanistan', tag: 'collabs' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.st-listing {
  border: 1px solid #d6d6d6;
  border-radius: 3px;
}
.st-title {
  background-color: #f5f6f7;
  padding: 10px 12px;
}
h1 {
  font-size: 16px;
  color: #0a0a0a;
}
span {
  border: 1px solid #c2c2c2;
  color: #737373;
  padding: 0px 5px;
  border-radius: 3px;
  font-size: 12px;
}
li {
  border-bottom: 1px solid #dbdbdb;
  &:last-child {
    border-bottom: 0;
  }
}
a {
  display: block;
  color: #0a0a0a;
  font-size: 14px;
  padding: 6px 12px 4px;
}
</style>
