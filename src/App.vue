<template>
  <div id="app">
    <div
      class="h-full px-14 py-7 mobile:px-4 mobile:py-3 overflow-hidden flex flex-col justify-between"
    >
      <div class="flex justify-between">
        <icon name="LN" />
        <tabs />
      </div>
      <router-view class="h-full" />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import tabs from "@/components/tabs.vue";
export default Vue.extend({
  components: {
    tabs,
  },
});
</script>
