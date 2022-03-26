<template>
  <ul>
    <li v-for="tab in tabs" :key="tab.name">
      <router-link
        class="hover:font-bold hover:text-secondary text-xl"
        :class="{
          'text-primary font-bold': pathAtual === tab.path,
        }"
        :to="tab.path"
      >
        <template class="sm:text-red-600">
          {{ nameState(tab) }}
        </template>
      </router-link>
    </li>
  </ul>
</template>
<script lang="ts">
import Vue from "vue";
interface ITab {
  name: string;
  sigla: string;
  path: string;
}
export default Vue.extend({
  data: () => ({
    tabs: [
      { name: "INICIO", sigla: "I", path: "/" },
      { name: "HABILIDADES", sigla: "H", path: "/skill" },
      { name: "PROJETOS", sigla: "P", path: "/project" },
      { name: "SOBRE MIM", sigla: "S", path: "/about" },
    ] as ITab[],
  }),
  computed: {
    pathAtual() {
      return this.$route.path;
    },
  },
  methods: {
    nameState(tab: ITab) {
      if (!this.$isMobile.value) return tab.name;
      if (this.pathAtual === tab.path) return tab.name;
      return tab.sigla;
    },
  },
});
</script>
<style lang="scss" scoped>
ul {
  list-style-type: none;
  display: flex;
  align-items: center;
  li {
    display: inline;
    a {
      padding: 16px;
      text-decoration: none;
    }
  }
}
</style>
