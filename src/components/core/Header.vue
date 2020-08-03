<template>
  <div>
    <v-app-bar color="#ffff" light app>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="d-xl-none"
      ></v-app-bar-nav-icon>
      <v-img
        class="mx-2"
        src="https://image.flaticon.com/icons/svg/882/882747.svg"
        max-height="130"
        max-width="130"
        contain
      ></v-img>
      <v-spacer></v-spacer>


      <div v-for="([title, route], index) in top_right_menu" :key="index" >
       <v-btn  class="mr-2 d-none d-sm-flex" @click="onClickMenu(route)">
       {{title}}
      </v-btn>
      </div>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      dark
      color="#1969C1"
      v-model="drawer"
      absolute
      left
      temporary
      width="260px"
    >
      <router-link to="/" exact>
        <v-img src="@/assets/tsc-icon.png" alt="" width="100%" />
      </router-link>

      <v-list>
        <v-list-item-group v-model="selectedMenu" mandatory color="primary">
          <v-subheader>MENUS</v-subheader>
          <v-list-item
            class="tile"
            v-for="([icon, title, route], index) in menus"
            :key="index"
            @click="onClickMenu(route)"
          >
            <v-list-item-icon>
              <v-icon>{{ icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      
    </v-navigation-drawer>
  </div>
</template>
<script>
import Menu from "@/components/core/Menu";
export default {
  data: () => ({
    drawer: false,
    group: null,
    selectedMenu: 0,
    menus: [
      ["mdi-apps-box", "Home", "/stock"],
      ["mdi-chart-areaspline", "Job Openings", "/job"],
      ["mdi-file-table-box-multiple-outline", "About", "/about"],
    ],
    top_right_menu: [
      ["Home", "/stock"],
      ["Job", "/job"],
      ["About", "/about"],
    ],
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },
  methods: {
    onClickMenu(link) {
      this.$router.push(link).catch((err) => {});
    },
  },
};
</script>

<style scoped>
.v-list-item-group .v-list-item--active {
  color: #fff !important;
  font-weight: bold;
}
</style>
