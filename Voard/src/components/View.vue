<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>글보기</v-app-bar-title>
      <p>
        <!-- ? 의미 : null이 아니면-->
        {{ user?.nick }}님 반갑습니다.
        <v-btn @click="btnLogout">로그아웃</v-btn>
      </p>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-sheet max-width="800" class="mx-auto mt-10">
          <v-table>
            <tr>
              <th>제목</th>
              <td readonly>제목입니다</td>
            </tr>
            <tr>
              <th>내용</th>
              <td class="pt-10">
                <v-textarea variant="outlined" name="content" readonly
                  >내용입니다</v-textarea
                >
              </td>
            </tr>
          </v-table>
          <v-sheet class="text-right pt-6">
            <v-btn @click="btnWrite">목록</v-btn>
          </v-sheet>
        </v-sheet>
      </v-container>
    </v-main>
    <v-footer app theme="dark">copyright &copy;Voard v1.0</v-footer>
  </v-app>
</template>
<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed, onBeforeMount, reactive, ref } from "vue";
import axios from "axios";

const router = useRouter();
const userStore = useStore();

const user = computed(() => userStore.getters.user);

onBeforeMount(() => {
  axios
    .get("http://13.125.199.85:8484/Voard/view")
    .then((response) => {
      console.log(response);
      const data = response.data;
      state.data = data;
      state.pageStartNum = data.pageStartNum;
      state.lastPageNum = data.lastPageNum;
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>
<style scoped></style>
