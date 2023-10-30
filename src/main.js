import { createApp } from "vue";
import App from "./App.vue";
import router from "./resources/router";
import { store } from "./resources/store";

window.Kakao.init("32c148d16c25b3ee3fa4bf5641ae39a9");

const isLogin = sessionStorage.getItem("isLogin");

if (isLogin) {
  store.state.isLogin = true;
} else if (!isLogin) {
  store.state.isLogin = false;
}

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
