import { createApp } from "vue";

import urql from "@urql/vue";
import { urqlOptions } from "./urql";
import { primevue } from "./primevue";
import router from "./router";

import App from "./App.vue";
const app = createApp(App);

app.use(primevue).use(urql, urqlOptions).use(router).mount("#app");
