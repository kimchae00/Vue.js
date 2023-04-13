<template>
  <h3>Ch07. HTTP 통신과 JWT</h3>
  <p>
    <router-link to="/axios">Axios 실습</router-link> /
    <router-link to="/rest">REST API 실습</router-link> /
    <router-link to="/jwt">JWT 실습</router-link>
  </p>
  <router-view></router-view>
</template>

<script setup>
/**
 * 날짜 : 2023/04/12
 * 이름 : 김채영
 * 내용 : Ch07. HTTP 통신과 JWT 실습
 *
 * npm install axios@next -> 뒤에 @next는 최신버전을 뜻함
 * npm install vue-router/vuex@next
 *
 * 스프링 툴과 연결 (서버가 다를 때 에러 뜸)
 *  -> 해결방법 1 : 확장 프로그램 Allow CORS 켜기
 *  -> 해결방법 2 : 컨트롤러에 어노테이션 @CrossOrigin(origins ="*") 추가하기 (보안 측면에서는 위험할 수 있음)
 *
 * Axios
 *  - axios({}).then().catch() 또는 axios.get().then().catch()
 *  - get  : 파라미터 보낼 땐 params 사용
 *  - post : 컨트롤러에 @RequestBody 추가해야 데이터를 받음
 *  - 파라미터에 변수 참조하려면 ""가 아닌 ``로 쓰기
 *
 * JWT
 *  - 토큰 확인 : https://jwt.io/
 *  - 핵심내용 : 스프링 Voard - JWTUtil / UserController
 */
</script>

<style scoped></style>
