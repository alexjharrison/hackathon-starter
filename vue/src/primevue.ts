import { Plugin } from "vue";
import PrimeVue from "primevue/config";

import "primevue/resources/themes/vela-blue/theme.css";
// import "primevue/resources/themes/arya-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeflex/primeflex.css";

import ToastService from "primevue/toastservice";

import Button from "primevue/button";
import Divider from "primevue/divider";

export const primevue: Plugin = {
  install(app, options) {
    app
      .use(PrimeVue)
      .use(ToastService)
      .component("p-button", Button)
      .component("divider", Divider);
  },
};
