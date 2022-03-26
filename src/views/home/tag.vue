<template>
  <div class="flex mobile:flex-col mobile:self-start">
    <a
      href="https://github.com/lucasnneto"
      target="_blank"
      class="flex items-center mobile:mb-5"
      @mouseenter="hoverGithub = true"
      @mouseleave="hoverGithub = false"
    >
      <icon name="tagLeft" :color="hoverGithub ? 'primary' : 'black'" />
      <icon name="github" :color="hoverGithub ? 'primary' : 'black'" />
      <p class="pl-2 text-lg font-bold text-primary" v-show="hoverGithub">
        Github
      </p>
      <icon
        class="pl-3"
        name="tagRight"
        :color="hoverGithub ? 'primary' : 'black'"
      />
    </a>
    <a
      href="https://www.linkedin.com/in/lucasnneto/"
      target="_blank"
      class="flex items-center mobile:mb-5"
      @mouseenter="hoverLinkdin = true"
      @mouseleave="hoverLinkdin = false"
    >
      <icon name="tagLeft" :color="hoverLinkdin ? 'primary' : 'black'" />
      <icon name="linkdin" :color="hoverLinkdin ? 'primary' : 'black'" />

      <p class="pl-2 text-lg font-bold text-primary" v-if="hoverLinkdin">
        Linkedin
      </p>

      <icon
        class="pl-3"
        name="tagRight"
        :color="hoverLinkdin ? 'primary' : 'black'"
      />
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
