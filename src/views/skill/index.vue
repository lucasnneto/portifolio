<template>
  <div
    class="about flex mobile:flex-col overflow-hidden mobile:overflow-auto mt-5 mobile:mt-0"
  >
    <list type="front" class="mobile:mb-14 mobile:mt-6" />
    <list type="back" class="mobile:mb-14" />
    <list type="mobile" />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import list from "./list.vue";
export default Vue.extend({
  components: {
    list,
  },
});
</script>
