<template>
  <v-container>
    <v-row  class="pt-5 pl-5 pr-5" >
      <v-col lg="6" md="6" sm="12" cols="12">
      <v-card>
        <v-card-title>
          <v-icon large left>
            mdi-card-bulleted
          </v-icon>
          <span class="title font-weight-light">Information/ข่าวสาร</span>
        </v-card-title>
        <v-card-text>
          <h4>Job Openings / ตำแหน่งงานที่เปิดรับ</h4>
          <v-list >
            <v-subheader>REPORTS</v-subheader>
            <v-list-item-group v-model="item" color="primary">
              <v-list-item v-for="(item, i) in items" :key="i" @click="onClickMenu(item.link)">
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card-text>
      </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    item: 0,
    items: [
      { text: "Production", icon: "mdi-clock" ,link: "/register" },
      { text: "Operator", icon: "mdi-account",link: "/register" },
      { text: "Technician", icon: "mdi-flag",link: "/register" },
    ],
  }),
  methods: {
    onClickMenu(link) {
      this.$router.push(link).catch((err) => {});
    },
  },
};
</script>

<style></style>
