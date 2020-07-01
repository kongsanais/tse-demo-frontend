<template>
  <v-app>
    <Header v-if="$store.state.isLogged || $route.name == 'register'" />
    <Menu v-if="$store.state.isLogged || $route.name == 'register'" />
    <Content />
  </v-app>
</template>

<script>
import Header from "@/components/core/Header";
import Menu from "@/components/core/Menu";
import Content from "@/components/core/Content";

export default {
  name: "App",
  components: {
    Header,
    Menu,
    Content,
  },
  mounted() {
    this.$store.dispatch({ type: "restoreLogin" });
  },
};
</script>
<style></style>
