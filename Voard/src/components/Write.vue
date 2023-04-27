<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>글쓰기</v-app-bar-title>
      <p>
        <!-- ? 의미 : null이 아니면-->
        {{ user?.nick }}님 반갑습니다.
        <v-btn @click="btnLogout">로그아웃</v-btn>
      </p>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-sheet max-width="800" class="mx-auto mt-10">
          <v-text-field
            label="제목 입력"
            variant="outlined"
            v-model="article.title"
          ></v-text-field>
          <v-textarea
            label="내용 입력"
            variant="outlined"
            rows="12"
            v-model="article.content"
          ></v-textarea>
          <v-file-input label="파일 첨부" variant="outlined"></v-file-input>
          <v-sheet class="text-right">
            <v-btn @click="btnCancel">취소</v-btn>
            <v-btn class="ml-2" color="primary" @click="btnWrite">작성</v-btn>
          </v-sheet>
        </v-sheet>
        <v-dialog v-model="dialog" width="auto">
          <v-card>
            <v-toolbar color="primary" title="글 등록 확인"></v-toolbar>
            <v-card-text>글 작성이 완료되었습니다.</v-card-text>
            <v-card-actions class="mx-auto">
              <v-btn color="primary" block @click="btnCloseDlg">확인</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>
    </v-main>
    <v-footer app theme="dark">copyright &copy;Voard v1.0</v-footer>
  </v-app>
</template>
<script setup>
import axios from "axios";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const userStore = useStore();

const article = reactive({
  title: null,
  content: null,
  uid: null,
});
const user = userStore.getters.user;

const dialog = ref(false);

const btnCloseDlg = () => {
  dialog.value = false;
  router.push("/list");
};

const btnCancel = () => {
  router.push("/list");
};
const btnWrite = () => {
  article.uid = user.uid;

  axios
    .post("http://13.125.199.85:8484/Voard/write", article)
    .then((response) => {
      console.log(response);
      if (response.data > 0) {
        dialog.value = true;
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
<style scoped></style>
