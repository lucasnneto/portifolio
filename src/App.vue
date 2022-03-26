<template>
  <div id="app">
    <div
      class="h-full px-14 py-7 mobile:px-4 mobile:py-3 overflow-hidden flex flex-col justify-between relative"
    >
      <div class="flex justify-between">
        <button @click="modal = !modal" v-if="$isMobile.value">
          <icon name="menuMobile" />
        </button>
        <dropMenu @closeModal="closeModal" v-if="modal" />
        <icon name="LN" />
        <tabs v-if="!$isMobile.value" />
      </div>
      <router-view class="h-full" />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import tabs from "@/components/tabs.vue";
import dropMenu from "@/components/dropMenu.vue";
export default Vue.extend({
  components: {
    tabs,
    dropMenu,
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
