<template>
  <div class="flex mobile:flex-col mobile:self-start">
    <a
      href="https://github.com/lucasnneto"
      target="_blank"
      class="flex items-center mobile:mb-5"
      @mouseenter="hoverGithub = true"
      @mouseleave="hoverGithub = false"
    >
      <icon name="tagLeft" :color="hoverGithub ? '#009782' : 'black'" />
      <icon name="github" :color="hoverGithub ? '#009782' : 'black'" />
      <p class="pl-2 text-lg font-bold text-primary" v-show="hoverGithub">
        Github
      </p>
      <icon
        class="pl-3"
        name="tagRight"
        :color="hoverGithub ? '#009782' : 'black'"
      />
    </a>
    <a
      href="https://www.linkedin.com/in/lucasnneto/"
      target="_blank"
      class="flex items-center mobile:mb-5"
      @mouseenter="hoverLinkdin = true"
      @mouseleave="hoverLinkdin = false"
    >
      <icon name="tagLeft" :color="hoverLinkdin ? '#009782' : 'black'" />
      <icon name="linkdin" :color="hoverLinkdin ? '#009782' : 'black'" />

      <p class="pl-2 text-lg font-bold text-primary" v-if="hoverLinkdin">
        Linkedin
      </p>

      <icon
        class="pl-3"
        name="tagRight"
        :color="hoverLinkdin ? '#009782' : 'black'"
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
