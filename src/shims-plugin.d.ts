import Vue from "vue";

declare module "vue/types/vue" {
  interface Vue {
    $isMobile: { value: boolean };
  }
}
