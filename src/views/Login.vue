<template>
  <v-container>
    <v-row class="justify-center">
      <v-card style="width:400px;" class="mt-8">
        <v-img
          class="white--text align-end ml-5 mt-5 mr-5 mb-5"
          src="@/assets/samsung-icon.jpg"
          height="150px"
        >

          <v-card-title primary-title>
            Login
          </v-card-title>
        </v-img>
        <v-card-text>
          <v-form @submit.prevent="submit">

            <!-- Username -->
            <v-text-field
              name="email"
              label="Email"
              id="email"
              v-model="account.email"
            />

            <!-- Password -->
            <v-text-field
              name="password"
              label="Password"
              id="password"
              v-model="account.password"
              :append-icon="isShowPassword ? 'visibility' : 'visibility_off'"
              @click:append="isShowPassword = !isShowPassword"
              :type="isShowPassword ? 'text' : 'password'"
              counter
            />

            <v-row class="justify-space-between px-3 pt-4">
              <v-btn class="mt-2"  @click.prevent="$router.push('/register')" color="indigo" dark>Register</v-btn>
              <v-btn type="submit" color="success" class="mt-2">Login</v-btn>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import api from "@/services/api";

export default {
  mounted() {
    if (api.isLoggedIn()) {
      this.$router.push("/home");
    }
  },
  data() {
    return {
      isShowPassword: false,
      account: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    submit() {
      this.$router.push("/home");
      this.$store.dispatch({
        type: "doLogin",
        email: this.account.email,
        password: this.account.password
      });
    }
  }
};
</script>

<style></style>
