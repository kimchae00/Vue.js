<template>
  <main>
    <ul>
      <Item />
    </ul>
  </main>
</template>

<script>
// template에 v-bind:todo v-bind 생략가능
import Item from "./Item.vue";

export default {
  name: "Main",
  components: {
    Item,
  },
  setup() {
    return {};
  },
};
</script>

<style>
main {
  width: 100%;
  height: auto;
  padding: 10px;
  box-sizing: border-box;
}
main > ul {
  width: 100%;
  height: auto;
  list-style: none;
  padding-left: 0;
  box-sizing: border-box;
}
main > ul > li {
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin: 6px 0;
  box-sizing: border-box;
  background-color: white;
}
main > ul > li > button {
  float: right;
  width: 40px;
  height: 40px;
  border: none;
  color: #de4343;
}
main > ul > li > button:hover {
  background-color: rgb(194, 192, 192);
}
</style>
