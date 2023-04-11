<template>
  <h3>Ch06. Vuex 실습</h3>

  <p>Vuex message : {{ store.getters.getMessage }}</p>
  <table border="1">
    <tr>
      <th>번호</th>
      <th>내용</th>
      <th>완료</th>
    </tr>
    <tr v-for="todo in todos">
      <td>{{ todo.no }}</td>
      <td>{{ todo.text }}</td>
      <td>{{ todo.done }}</td>
    </tr>
  </table>

  <Component1></Component1>
  <Component2></Component2>
  <Component3></Component3>
</template>

<script setup>
/**
 * 날짜 : 2023/04/11
 * 이름 : 김채영
 * 내용 : CH06. Vuex 실습
 *
 * Vuex 설치하기 - npm install vuex@next (vuex 사이트 참조)
 */
import Component1 from "./components/Component1.vue";
import Component2 from "./components/Component2.vue";
import Component3 from "./components/Component3.vue";
import { useStore } from "vuex";

const store = useStore();
const todos = store.getters.getTodos;
</script>

<style scoped></style>
