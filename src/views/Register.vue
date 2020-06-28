<template>
  <v-container>
    <v-row align="center" justify="center" class="pt-10">
      <v-card style="width:400px;">
        <v-img
          class="white--text align-end"
          height="200px"
          src="@/assets/login_header.jpg"
        >
          <v-card-title>Register </v-card-title>
        </v-img>
        <v-card-text>
          <v-form @submit.prevent="submit"> 
            <!-- username -->
            <v-text-field name="username" 
            label="Username" 
            id="username" 
            v-model="account.username"
            :rules="usernameRule"/>

            <!-- password -->
            <v-text-field
              name="password"
              label="Password"
              id="password"
              :append-icon="ShowPass ? 'visibility' : 'visibility_off'"
              v-on:click:append="ShowPass = !ShowPass"
              :type="ShowPass ? 'text' : 'password'"
              counter
              v-model="account.password"
              :rules="passwordRules"
            />

            <!-- btn -->
            <v-row class="justify-space-between px-3">
              <v-btn @click.prevent="$router.back()">Cancel</v-btn>
              <v-btn color="success" type="submit" >Confirm</v-btn>
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
  name: "regsiter",
  data() {
    return {
            ShowPass: false,
            account:{
             username:"",
             password:""
           },
           usernameRule:[check_username=>!!check_username || "Username is required !"], 
           passwordRules:[check_password=>!!check_password || "Password is required !", expression_filter=>!!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(expression_filter) || "Minimum eight characters, at least one letter and one number"]
    };
  },
  methods: {
    async submit(){
      await api.register(this.account)
    }
  },
};
</script>

<style></style>
