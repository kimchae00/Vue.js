<template>
  <h4>로그인 성공</h4>
  <p>
    {{ user.nick }}님 반갑습니다.<br /><br />
    <a href="#" @click.prevent="logout">로그아웃</a>
  </p>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed } from "vue"; // 새로고침해도 user 값 참조 가능하게

const router = useRouter();
const store = useStore();

const user = computed(() => {
  return store.getters.getUser;
});

const logout = function () {
  localStorage.removeItem("accessToken");
  router.push("/jwt/loginForm");
};
</script>

<style scoped></style>
