// declare module '@vue/runtime-core' works for vue 3
// declare module 'vue' works for vue2 + vue 3
declare module "vue" {
  export interface GlobalComponents {
    "p-button": typeof import("primevue/button")["default"];
  }
}

export {};
