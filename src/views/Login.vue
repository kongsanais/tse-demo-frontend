<template>
  <v-container >
    <v-row align="center" justify="center">
      <v-card style="width:400px;">
        <v-img
          class="white--text align-end"
          height="200px"
          src="@/assets/login_header.jpg"
        >
          <v-card-title>Login</v-card-title>
        </v-img>

        <v-card-text>
          <v-form @submit.prevent="submit">
            <v-text-field
              name="username"
              label="Username"
              id="username"
              v-model="account.username"
              :rules="usernameRule"
            />

            <v-text-field
              name="password"
              label="Password"
              id="password"
              v-model="account.password"
              :append-icon="ShowPass ? 'visibility' : 'visibility_off'"
              v-on:click:append="ShowPass = !ShowPass"
              :type="ShowPass ? 'text' : 'password'"
              :rules="passwordRules"
              counter
            />

            <v-row class="justify-space-between px-3">
              <v-btn @click.prevent="$router.push('/register')">Register</v-btn>
              <v-btn color="success" type="submit">Login</v-btn>
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
  name: "login",
  data() {
    return {
      ShowPass: false,
      account: {
        username: "",
        password: "",
      },
      usernameRule: [
        (check_username) => !!check_username || "Username is required !",
      ],
      passwordRules: [
        (check_password) => !!check_password || "Password is required !",
      ],
    };
  },
   mounted() {
    if (api.isLoggedIn()) {
      this.$router.push("/stock");
    }
  },
  methods: {
    submit() {
      this.$router.push("/stock");
      this.$store.dispatch({
        type: "doLogin",
        username: this.account.username,
        password: this.account.password,
      });
    },
  },
};
</script>

<style></style>
