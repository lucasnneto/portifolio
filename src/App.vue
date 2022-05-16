<template>
  <div id="app" class="dark:bg-backgound-dark dark:text-white">
    <div
      class="h-full px-14 py-7 mobile:px-4 mobile:py-3 overflow-hidden flex flex-col justify-between relative"
    >
      <div class="flex justify-between">
        <button @click="modal = !modal" v-if="$isMobile.value">
          <icon name="menuMobile" />
        </button>
        <dropMenu
          :value="modal"
          @closeModal="closeModal"
          v-if="$isMobile.value"
        />
        <icon name="LN" />
        <div class="flex items-center">
          <tabs v-if="!$isMobile.value" />
          <theme />
        </div>
      </div>
      <vue-page-transition
        name="fade-in-up"
        class="h-full d-flex overflow-hidden"
      >
        <router-view class="h-full" />
      </vue-page-transition>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import tabs from "@/components/tabs.vue";
import dropMenu from "@/components/dropMenu.vue";
import theme from "@/components/theme.vue";
export default Vue.extend({
  components: {
    tabs,
    dropMenu,
    theme,
  },
  mounted() {
    const theme = JSON.parse(
      localStorage.getItem("lucas-portifolio") || "false"
    );
    if (
      theme?.theme === "dark" ||
      this.$store.state.theme === "dark" ||
      (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      this.$store.dispatch("CHANGE_THEME", {
        theme: "dark",
      });
    } else {
      this.$store.dispatch("CHANGE_THEME", {
        theme: "light",
      });
    }
  },
  data: () => ({
    modal: false,
  }),
  methods: {
    closeModal() {
      this.modal = false;
    },
  },
});
</script>
<style>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
