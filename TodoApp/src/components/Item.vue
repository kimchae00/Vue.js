<template>
  <li v-for="(todo, index) in todos">
    <i class="fa-sharp fa-solid fa-check" style="color: #33d75c"></i>
    {{ todo.content }}
    <button @click="btnRemoveTodo(index, todo.no)">삭제</button>
  </li>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "Item",
  setup() {
    const store = useStore();
    const todos = computed(() => store.getters.getTodos);

    const btnRemoveTodo = (index, no) => {
      store.dispatch("removeTodo", { index, no });
    };

    return {
      todos,
      btnRemoveTodo,
    };
  },
};
</script>

<style scoped></style>
