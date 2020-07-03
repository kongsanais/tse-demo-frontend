<template>
  <v-container grid-list-xs>

    <v-card shaped>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">Register</v-list-item-title>
          <v-list-item-subtitle>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="name"
                :counter="10"
                :rules="nameRules"
                label="Name"
                required
              ></v-text-field>

              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>

              <v-select
                v-model="select"
                :items="items"
                :rules="[(v) => !!v || 'Item is required']"
                label="Item"
                required
              ></v-select>

              <v-checkbox
                v-model="checkbox"
                :rules="[(v) => !!v || 'You must agree to continue!']"
                label="Do you agree?"
                required
              ></v-checkbox>

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
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
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
