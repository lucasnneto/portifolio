<template>
  <div class="flex mobile:flex-col mobile:self-start">
    <a
      href="https://github.com/lucasnneto"
      target="_blank"
      class="flex items-center mobile:mb-5 group tagA"
    >
      <icon class="icon" name="tagLeft" />
      <icon class="icon" name="github" />
      <div class="w-0 group-hover:w-full truncate transition-all duration-400">
        <p class="pl-2 text-lg font-bold group-hover:text-primary">Github</p>
      </div>
      <icon class="pl-3 icon" name="tagRight" />
    </a>
    <a
      href="https://www.linkedin.com/in/lucasnneto/"
      target="_blank"
      class="flex items-center mobile:mb-5 group tagA"
    >
      <icon class="icon" name="tagLeft" />
      <icon class="icon" name="linkdin" />
      <div class="w-0 group-hover:w-full truncate transition-all duration-400">
        <p class="pl-2 text-lg font-bold group-hover:text-primary">Linkedin</p>
      </div>
      <icon class="pl-3 icon" name="tagRight" />
    </a>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data: () => ({
    hoverGithub: false,
    hoverLinkdin: false,
  }),
});
</script>
<style scoped>
::v-deep .tagA:hover .icon svg path {
  fill: #009782;
}
/* .tagA:hover .titleTag {
  width: 100%;
} */
</style>
