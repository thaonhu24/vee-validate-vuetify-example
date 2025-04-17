import "./validations/customRules";

import { createApp } from "vue";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles"; // Global CSS has to be imported
import "@mdi/font/css/materialdesignicons.css";
import { createVueI18nAdapter } from "vuetify/locale/adapters/vue-i18n";
import { createI18n, useI18n } from "vue-i18n";

import en from "./locales/en.json";
import vi from "./locales/vi.json";
import App from "./App.vue";

const i18n = createI18n({
  legacy: false,
  locale: "vi",
  fallbackLocale: "vi",
  messages: { en, vi },
});

const app = createApp(App);
const vuetify = createVuetify({
  components,
  directives,
  locale: {
    adapter: createVueI18nAdapter({ i18n, useI18n }),
  },
});

app.use(i18n);

app.use(vuetify);

app.mount("#app");
