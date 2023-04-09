import "./style.css";
import { createApp } from "vue";
import * as VeeValidate from "vee-validate";
import VueTheMask from "vue-the-mask";
import App from "./App.vue";
import initVeeValidate from "./utils/initVeeValidate";
import router from "./router/index";
import VueRecaptcha from "vue3-recaptcha-v2";

const app = createApp(App);
initVeeValidate();
app.directive("focus", {
  mounted: function (el) {
    // Focus the element
    el.focus();
  },
  inserted: function (el) {
    // Focus the element
    el.focus();
  },
}),
  app.use(VueRecaptcha, {
    siteKey: "6LdeKVUlAAAAAMgNwB9QJuJFE5lB54U8GgaGbWsW",
    alterDomain: false, // default: false
  });
app.use(VueTheMask);
app.use(router);
app.mount("#app");
