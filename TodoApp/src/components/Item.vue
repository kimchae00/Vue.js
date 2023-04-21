<template>
  <li v-for="(todo, index) in todos">
    <i class="fa-sharp fa-solid fa-check"></i>
    {{ todo }}
    <button @click="btnRemoveTodo(index)">삭제</button>
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

    const btnRemoveTodo = (index) => {
      console.log("idx: " + index);
      store.dispatch("removeTodo", index);
    };

    return {
      todos,
      btnRemoveTodo,
    };
  },
};
</script>

<style scoped></style>
