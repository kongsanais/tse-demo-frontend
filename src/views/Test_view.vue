<template>
  <v-container grid-list-xs>
  <v-card>
    <v-toolbar flat color="primary" dark>
      <v-toolbar-title>Form Register</v-toolbar-title>
    </v-toolbar>
    <v-tabs vertical>

      <v-tab>
        <v-icon left>mdi-account</v-icon>
        Option 1
      </v-tab>

      <v-tab>
        <v-icon left>mdi-lock</v-icon>
        Option 2
      </v-tab>

      <v-tab>
        <v-icon left>mdi-access-point</v-icon>
        Option 3
      </v-tab>

      <v-tab>
        <v-icon left>mdi-access-point</v-icon>
        Option 4
      </v-tab>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
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

          </v-card-text>
        </v-card>
      </v-tab-item>


      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
            </p>

            <p>
              Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In hac habitasse platea dictumst. Fusce ac felis sit amet ligula pharetra condimentum.
            </p>

            <p>
              Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Nam commodo suscipit quam. In consectetuer turpis ut velit. Sed cursus turpis vitae tortor. Aliquam eu nunc.
            </p>

            <p>
              Etiam ut purus mattis mauris sodales aliquam. Ut varius tincidunt libero. Aenean viverra rhoncus pede. Duis leo. Fusce fermentum odio nec arcu.
            </p>

            <p class="mb-0">
              Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
            </p>

            <p class="mb-0">
              Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
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
