import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    todos: [],
  },
  mutations: {
    SET_TODOS(state, todos) {
      state.todos = todos;
    },
    ADD_TODO(state, todo) {
      state.todos.push({ content: todo });
    },
    REMOVE_TODO(state, index) {
      state.todos.splice(index, 1);
    },
    CLEAR_TODO(state) {
      state.todos = [];
    },
  },
  actions: {
    getTodos(context) {
      axios
        .get("http://13.125.199.85:8383/todos")
        .then((response) => {
          console.log(response);
          const todos = response.data;
          context.commit("SET_TODOS", todos);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addTodo(context, todo) {
      const data = {
        content: todo,
      };

      axios
        .post("http://13.125.199.85:8383/todo", data)
        .then(() => {
          context.commit("ADD_TODO", todo);
          context.dispatch("getTodos"); // content 외의 값들도 바로 다시 가져옴
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // 매개변수 두 개는 불가 (context, index, no) - X / item 컴포넌트에서 {index, no} 묶음
    removeTodo(context, data) {
      axios
        .delete("http://13.125.199.85:8383/remove", {
          params: { no: data.no },
        })
        .then((response) => {
          context.commit("REMOVE_TODO", data.index);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    clearTodo(context) {
      axios
        .delete("http://13.125.199.85:8383/clear")
        .then((response) => {
          context.commit("CLEAR_TODO");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  getters: {
    getTodos(state) {
      return state.todos;
    },
  },
});

export default store;
