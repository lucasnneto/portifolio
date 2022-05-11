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
        {{ tab.name }}
      </router-link>
    </li>
  </ul>
</template>
<script lang="ts">
import Vue from "vue";
interface ITab {
  name: string;
  path: string;
}
export default Vue.extend({
  data: () => ({
    tabs: [
      { name: "INICIO", path: "/" },
      { name: "HABILIDADES", path: "/skill" },
      { name: "PROJETOS", path: "/project" },
      // { name: "SOBRE MIM", path: "/about" },
    ] as ITab[],
  }),
  computed: {
    pathAtual() {
      return this.$route.path;
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
