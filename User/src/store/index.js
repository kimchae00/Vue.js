import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    users: null,
  },
  mutations: {
    SET_USER: function (state, data) {
      state.user = data;
    },
  },
  actions: {
    setUser: function (context, data) {
      context.commit("SET_USER", data);
    },
    list: function (context, users) {
      return axios
        .get("http://localhost:8080/Ch09/user2s")
        .then((response) => {
          users.value = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  getters: {},
});

// store 내보내기 -> main.js 등록 설정
export default store;
