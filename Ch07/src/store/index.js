/**
 * Vuex : 전역 스토어 설정
 */
import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    user: null,
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
    authUser: function (context, token) {
      return axios
        .get("http://localhost:8080/Voard/user/auth", {
          headers: { "X-AUTH-TOKEN": token },
        })
        .then((response) => {
          console.log(response);
          const user = response.data.user;

          // 사용자 객체 저장(State)
          context.commit("SET_USER", user);
        })
        .catch((error) => {
          console.log(error);
          throw error; // 로그인폼으로 에러 전달(안하면 로그인폼에서 에러 처리 안됨)
        });
    },

    login: function (context, user) {
      return axios
        .post("http://localhost:8080/Voard/user/login", user)
        .then((response) => {
          console.log(response);
          const token = response.data.accessToken;
          const user = response.data.user;

          // accessToken 저장(Cookie)
          localStorage.setItem("accessToken", token); // 로컬저장소에 저장

          // 사용자 객체 저장(State)
          context.commit("SET_USER", user);
        })
        .catch((error) => {
          console.log(error);
          throw error; // 로그인폼으로 에러 전달(안하면 로그인폼에서 에러 처리 안됨)
        });
    },
  },
  getters: {
    getUser: function (state) {
      return state.user;
    },
  },
});

// store 내보내기 -> main.js 등록 설정
export default store;
