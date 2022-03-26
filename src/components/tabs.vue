<template>
  <ul>
    <li v-for="tab in tabs" :key="tab.name">
      <router-link
        class="black--text font"
        :class="{
          'primary--text font-weight-bold selected': pathAtual === tab.path,
        }"
        :to="tab.path"
        >{{ tab.name }}</router-link
      >
    </li>
  </ul>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data: () => ({
    tabs: [
      { name: "INICIO", sigla: "I", path: "/" },
      { name: "HABILIDADES", sigla: "H", path: "/skill" },
      { name: "PROJETOS", sigla: "P", path: "/project" },
      { name: "SOBRE", sigla: "S", path: "/about" },
    ],
  }),
  computed: {
    pathAtual() {
      return this.$route.path;
    },
  },
});
</script>
<style lang="scss" scoped>
.font {
  font-size: 23px;
}
ul {
  list-style-type: none;
  li {
    display: inline;
    a {
      padding: 16px;
      text-decoration: none;
      &:hover {
        font-weight: bold !important;
        color: var(--v-primary-darken1) !important;
      }
    }
  }
}
</style>
