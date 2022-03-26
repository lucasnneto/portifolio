<template>
  <div style="display: inherit !important" v-on="$listeners">
    <component :is="name" v-bind="$props" />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    name: { type: String, required: true },
    color: { type: String },
  },
});
</script>
