<template>
  <v-container grid-list-xs>
    <v-card shaped>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1"
            >Register/สมัคร</v-list-item-title
          >
          <v-list-item-subtitle>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-row>
                <!-- TH prefix  -->
                <v-col class="d-flex" xl="2" lg="3" md="3" sm="12" cols="12">
                  <v-select :items="items" label="คำนำหน้า" solo></v-select>
                </v-col>

                <!-- TH fristname -->
                <v-col class="d-flex" xl="5" lg="4" md="3" sm="12" cols="12">
                  <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    label="ชื่อ"
                    required
                  >
                  </v-text-field>
                </v-col>

                <!-- TH lastname -->
                <v-col class="d-flex" xl="5" lg="5" md="3" sm="12" cols="12">
                  <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    label="นามสกุล"
                    required
                  >
                  </v-text-field>
                </v-col>

                <!-- EN prefix -->
                <v-col class="d-flex" xl="2" lg="3" md="3" sm="12" cols="12">
                  <v-select :items="items" label="Prefix" solo></v-select>
                </v-col>

                <!-- EN fristname -->
                <v-col class="d-flex" xl="5" lg="4" md="3" sm="12" cols="12">
                  <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    label="Frist Name"
                    required
                  >
                  </v-text-field>
                </v-col>

                <!-- EN lastname -->
                <v-col class="d-flex" xl="5" lg="4" md="3" sm="12" cols="12">
                  <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    label="Last Name"
                    required
                  >
                  </v-text-field>
                </v-col>

                <!-- Address -->
                <v-col cols="12" md="6">
                  <v-textarea
                    label="Address/ที่อยู่อาศัย"
                    auto-grow
                    outlined
                    rows="5"
                    row-height="25"
                    shaped
                  ></v-textarea>
                </v-col>

                <!--  Birthday  -->
                <v-col class="d-flex" xl="4" lg="3" md="3" sm="12" cols="12">
                  <v-menu
                    v-model="menu"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="date"
                        label="Picker without buttons"
                        prepend-icon="event"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="date"
                      @input="menu = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>

                <!-- Age -->
                <v-col class="d-flex" xl="1" lg="1" md="1" sm="1" cols="12">
                  <v-text-field v-model="age" label="Age" disabled sm solo>
                  </v-text-field>
                </v-col>

                <!-- <v-col class="d-flex"  lg="6" md="6" sm="12" cols="12" >
                  <v-text-field
                    v-model="name"
                    :counter="10"
                    :rules="nameRules"
                    label="Name" 
                    required
                  >
                  </v-text-field>
                </v-col> -->
              </v-row>

              <v-row>
                <v-spacer></v-spacer>
                <v-btn
                  :disabled="!valid"
                  color="success"
                  class="ml-4 mr-1"
                  @click="validate"
                >
                  Next
                </v-btn>
                <v-btn color="error" class="mr-4 ml-1" @click="reset">
                  Reset
                </v-btn>
              </v-row>
            </v-form>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    checkbox: false,
    items: ["นาย", "นาง", "นางสาว"],
    date: new Date().toISOString().substr(0, 10),
    menu: false,
  }),
  methods: {
    validate() {
      alert(this.$refs.form.validate());
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
