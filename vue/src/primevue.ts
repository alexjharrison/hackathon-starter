import { Plugin } from "vue";
import PrimeVue from "primevue/config";

import "primevue/resources/themes/vela-blue/theme.css";
// import "primevue/resources/themes/arya-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeflex/primeflex.css";

import Button from "primevue/button";

export const primevue: Plugin = {
  install(app, options) {
    app.use(PrimeVue).component("p-button", Button);
  },
};
