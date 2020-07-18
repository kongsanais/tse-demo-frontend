<template>
  <v-container grid-list-xs>
    <v-card shaped>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">Register / สมัคร </v-list-item-title>
          {{applicant}}
          <v-list-item-subtitle>
            <v-form>
              <v-row>


                <!-- Username -->
                <v-col class="d-flex" xl="3" lg="3" md="3" sm="12" cols="12">
                  <v-text-field
                    v-model="applicant.username"
                    label="Username"
                  >
                  </v-text-field>
                </v-col>


                <!-- Password -->
                <v-col class="d-flex" xl="3" lg="3" md="3" sm="12" cols="12">
                  <v-text-field
                    v-model="applicant.password"
                    label="Password"
                  >
                  </v-text-field>
                </v-col>


                <!-- Confirm Password -->
                  <v-col class="d-flex" xl="3" lg="3" md="3" sm="12" cols="12">
                  <v-text-field
                    label="Confirm Password"
                  >
                  </v-text-field>
                </v-col>


                <!-- E-mail -->
                  <v-col class="d-flex" xl="3" lg="3" md="3" sm="12" cols="12">
                  <v-text-field
                    v-model="applicant.email"
                    label="Email"
                  >
                  </v-text-field>
                </v-col>


                <!-- TH prefix  -->
                <v-col class="d-flex" xl="2" lg="3" md="3" sm="12" cols="12">
                  <v-select   
                      :items="data_th_prefix"  
                       v-model="applicant.th_prefix"  
                      label="คำนำหน้า" solo>
                  </v-select>
                </v-col>
          

                <!-- TH fristname -->
                <v-col class="d-flex" xl="5" lg="4" md="3" sm="12" cols="12">
                  <v-text-field
                    v-model="applicant.th_firstname"
                    label="ชื่อ"
                  >
                  </v-text-field>
                </v-col>



                <!-- TH lastname -->
                <v-col class="d-flex" xl="5" lg="5" md="3" sm="12" cols="12">
                  <v-text-field
                    v-model="applicant.th_lastname"
                    label="นามสกุล"
                  >
                  </v-text-field>
                </v-col>



                <!-- EN prefix -->
                <v-col class="d-flex" xl="2" lg="3" md="3" sm="12" cols="12">
                  <v-select  label="Prefix"  :items="data_eng_prefix"  v-model="applicant.eng_prefix"  solo></v-select>
                </v-col>



                <!-- EN fristname -->
                <v-col class="d-flex" xl="5" lg="4" md="3" sm="12" cols="12">
                  <v-text-field
                    v-model="applicant.eng_firstname"
                    label="Frist Name"
                  >
                  </v-text-field>
                </v-col>


                <!-- EN lastname -->
                <v-col class="d-flex" xl="5" lg="4" md="3" sm="12" cols="12">
                  <v-text-field
                    v-model="applicant.eng_lastname"
                    label="Last Name"
                  >
                  </v-text-field>
                </v-col>


                <!-- Address -->
                <v-col cols="12" md="6">
                  <v-textarea
                    label="Address / ที่อยู่อาศัย"
                    auto-grow
                    outlined
                    rows="5"
                    row-height="25"
                    v-model="applicant.eng_address"
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
                        v-model="applicant.date_birthday"
                        label="Your Birthday"
                        prepend-icon="event"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      >
                      </v-text-field>
                    </template>

                    <v-date-picker
                      v-model="applicant.date_birthday"
                      @input="menu = false"
                      v-on:change="DateToAge(applicant.date_birthday)"
                    ></v-date-picker>
                    
                  </v-menu>
                </v-col>



                <!-- Age -->
                <v-col class="d-flex" xl="1" lg="1" md="1" sm="1" cols="12">
                  <v-text-field v-model="applicant.age" label="Age" disabled sm solo>
                  </v-text-field>
                </v-col>
                
              </v-row>

              <v-row>
                <v-spacer></v-spacer>
                <v-btn
                  color="success"
                  class="ml-4 mr-4"
                >
                  Next
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

import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
export default {
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    applicant : {
        username:"",
        password:"",
        email:"",
        th_prefix:"",
        th_firstname:"",
        th_lastname:"",
        eng_prefix:"",
        eng_firstname:"",
        eng_lastname:"",
        eng_address:"",
        date_birthday: new Date().toISOString().substr(0, 10),
        age: ""
  },
  data_th_prefix: ["นาย", "นาง", "นางสาว"],
  data_eng_prefix: ["Mr", "Mrs", "Miss"],
  menu: false,
  }),
  methods: {
   DateToAge: function (bdate) {
         var today = new Date();
         var birthDate = new Date(bdate);
         var Real_Age = today.getFullYear() - birthDate.getFullYear();
         var m = today.getMonth() - birthDate.getMonth();
         if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            Real_Age--;
         }

        //check value//
        if(Real_Age == 0 || Real_Age < 0 ){
           Real_Age = 0;   
        }
        this.applicant.age = Real_Age;
    }
  },
};
</script>
