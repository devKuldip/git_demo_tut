import "./style.css";
import { createApp } from "vue";
import * as VeeValidate from "vee-validate";
import VueTheMask from "vue-the-mask";
import App from "./App.vue";
import initVeeValidate from "./utils/initVeeValidate";
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
  app.use(VueTheMask);
app.mount("#app");
