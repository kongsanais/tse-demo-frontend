<template>
  <v-container grid-list-xs>
    <v-card>
      <v-toolbar flat color="primary" dark>
        <v-toolbar-title>Form Register</v-toolbar-title>
      </v-toolbar>
      <v-tabs v-model="tab" vertical>
        <v-tab v-for="tab in tabs" :key="tab.id" :href="tab.href_tab" exact>
          <v-icon left>{{ tab.icon }}</v-icon>
          {{ tab.name }}
        </v-tab>

        <v-tab-item value="tab-1">
          <v-card flat>
            <v-card-text>
              <v-form>
                <v-row>
                  <!-- Username -->
                  <v-col class="d-flex" xl="3" lg="3" md="3" sm="12" cols="12">
                    <v-text-field 
                    v-model="applicant.username" 
                    label="Username"
                    :rules="usernameRules"
                    >
                    </v-text-field>
                  </v-col>

                  <!-- Password -->
                  <v-col class="d-flex" xl="3" lg="3" md="3" sm="12" cols="12">
                    <v-text-field
                      v-model="applicant.password"
                      label="Password"
                      min="8"
                      :append-icon="show_password ? 'visibility' : 'visibility_off'"
                      @click:append="show_password = !show_password"
                      :type="show_password ? 'password' : 'text'"
                      :rules="passwordRules"
                      required
                    />
                  </v-col>



                  <!-- Confirm Password -->
                  <v-col class="d-flex" xl="3" lg="3" md="3" sm="12" cols="12">
                    <v-text-field
                      v-model="checkpassword"
                      label="Confirm Password"
                      min="8"
                      :append-icon="show_password_con ? 'visibility' : 'visibility_off'"
                      @click:append="show_password_con = !show_password_con"
                      :type="show_password_con ? 'password' : 'text'"
                      :rules="[(applicant.password === checkpassword) || 'Password must match']"
                      required
                    />
                  </v-col>

                  <!-- E-mail -->
                  <v-col class="d-flex" xl="3" lg="3" md="3" sm="12" cols="12">
                    <v-text-field 
                    v-model="applicant.email" 
                    type="email" 
                    label="Email"
                    :rules="emailRules"
                    >
                    </v-text-field>
                  </v-col>

                  <!-- TH prefix  -->
                  <v-col class="d-flex" xl="2" lg="3" md="3" sm="12" cols="12">
                    <v-select
                      :items="data_th_prefix"
                      v-model="applicant.th_prefix"
                      label="คำนำหน้า"
                      :rules="th_prefixRules"
                      outlined
                    >
                    </v-select>
                  </v-col>

                  <!-- TH fristname -->
                  <v-col class="d-flex" xl="5" lg="4" md="3" sm="12" cols="12">
                    
                    <v-text-field 
                    v-model="applicant.th_firstname" 
                    label="ชื่อ"
                    :rules="th_first_nameRules"
                    >

                    </v-text-field>
                  </v-col>

                  <!-- TH lastname -->
                  <v-col class="d-flex" xl="5" lg="5" md="3" sm="12" cols="12">
                    <v-text-field
                      v-model="applicant.th_lastname"
                      label="นามสกุล"
                      :rules="th_last_nameRules"
                    >
                    </v-text-field>
                  </v-col>


                  <!-- EN prefix -->
                  <v-col class="d-flex" xl="2" lg="3" md="3" sm="12" cols="12">
                    <v-select
                      label="Prefix"
                      :items="data_eng_prefix"
                      v-model="applicant.eng_prefix"
                      :rules="eng_prefixRules"
                      outlined
                    ></v-select>
                  </v-col>


                  <!-- EN fristname -->
                  <v-col class="d-flex" xl="5" lg="4" md="3" sm="12" cols="12">
                    <v-text-field
                      v-model="applicant.eng_firstname"
                      label="Frist Name"
                      :rules="eng_first_nameRules"
                    >
                    </v-text-field>
                  </v-col>


                  <!-- EN lastname -->
                  <v-col class="d-flex" xl="5" lg="4" md="3" sm="12" cols="12">
                    <v-text-field
                      v-model="applicant.eng_lastname"
                      label="Last Name"
                      :rules="eng_last_nameRules"
                    >
                    </v-text-field>
                  </v-col>

                  <!-- Nationality -->
                  <v-col class="d-flex" xl="3" lg="3" md="3" sm="3" cols="12">
                    <v-select
                      :items="CountryList"
                      label="Nationality"
                      :rules="nationality_Rules"
                    ></v-select>
                  </v-col>

                  <!-- Phone number -->
                  <v-col class="d-flex" xl="3" lg="3" md="3" sm="3" cols="12">
                    <v-text-field label="Phone number" type="number" min="0"
                    :rules="phone_numberRules"
                    >
                    </v-text-field>
                  </v-col>


                  <!-- Phone number  family-->
                  <v-col class="d-flex" xl="3" lg="3" md="3" sm="3" cols="12">
                    <v-text-field
                      label="Phone number family"
                      type="number"
                      min="0"
                      :rules="phone_numberRules"
                    >
                    </v-text-field>
                  </v-col>


                  <!-- Relationship -->
                  <v-col class="d-flex" xl="3" lg="3" md="2" sm="3" cols="12">
                            <v-select
                            :items="data_Relationship"
                            label="Relationship"
                            :rules="relationshipRules"
                          ></v-select>
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
                      :rules="addressRules"
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
                    <v-text-field
                      v-model="applicant.age"
                      label="Age"
                      disabled
                      sm
                      solo
                    >
                    </v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-spacer></v-spacer>
                  <v-btn class="primary mr-3" @click="changeTab(2)">
                    Next
                  </v-btn>
                </v-row>
              </v-form>
            </v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab-item value="tab-2">
          <v-card flat>
            <v-card-text>
              <v-row>
                <v-col class="d-flex" xl="2" lg="3" md="3" sm="12" cols="12">
                  <img
                    src="https://image.flaticon.com/icons/svg/882/882849.svg"
                    style="height: 230px;border-style: groove;"
                    class="ml-3"
                  />
                </v-col>

                <v-col
                  class="d-flex ml-3"
                  xl="6"
                  lg="6"
                  md="6"
                  sm="12"
                  cols="12"
                >
                  <v-card width="100%" outlined>
                    <v-list-item three-line>
                      <v-list-item-content>
                        <v-list-item-title class="headline mb-2"
                          >Headline 5</v-list-item-title
                        >
                        <v-list-item-subtitle>
                          <v-file-input
                            chips
                            show-size
                            label="Upload/Your Profile Picture"
                          ></v-file-input
                        ></v-list-item-subtitle>
                        <v-list-item-subtitle>
                          <v-file-input
                            chips
                            show-size
                            label="Upload/Your Resume File"
                          ></v-file-input
                        ></v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card>
                </v-col>

                <v-col
                  class="d-flex align-xl-start"
                  xl="3"
                  lg="3"
                  md="3"
                  sm="12"
                  cols="12"
                >
                  <v-file-input
                    chips
                    show-size
                    label="Upload/Your Profile Picture"
                  ></v-file-input>
                </v-col>
              </v-row>

              <v-row>
                <v-spacer></v-spacer>
                <v-btn @click="changeTab(1)" class="mr-3">
                  Back
                </v-btn>

                <v-btn @click="changeTab(3)" class="primary">
                  Next
                </v-btn>
              </v-row>
            </v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab-item value="tab-3">
          <v-card flat>
            <v-card-text>
              <h2 class="mt-2 mb-3">
                Privacy policy/นโยบายความเป็นส่วนตัว
              </h2>

              <p class="mb-0">
                นโยบายความเป็นส่วนตัวฉบับนี้มีผลบังคับใช้กับอุปกรณ์และบริการทั้งหมดของ
                Samsung ตั้งแต่โทรศัพท์มือถือและแท็บเล็ต ไปจนถึงโทรทัศน์
                เครื่องใช้ในบ้าน บริการออนไลน์ เว็บไซต์ แอปพลิเคชัน บริการ
                การประกวดแข่งขัน การสำรวจ การแลกรับสิทธิ์ การทำการตลาด
                การส่งเสริมการขาย การลงทะเบียนรับประกันสินค้า
                บริการหลังการขายหรือบริการซ่อม และบริการอื่นของ Samsung
                ที่อ้างถึงหรือเชื่อมโยงถึงนโยบายนี้ (เรียกรวมกันว่า “บริการ”
                ของเรา) นอกจากนั้น
                คุณจะต้องหมั่นตรวจสอบการปรับปรุงนโยบายความเป็นส่วนตัวฉบับนี้อย่างสม่ำเสมอ
                นโยบายความเป็นส่วนตัวฉบับนี้อาจถูกปรับปรุงเป็นระยะๆเพื่อให้สอดคล้องกับการเปลี่ยนแปลงของแนวปฏิบัติด้านข้อมูลส่วนบุคคลซึ่งเกี่ยวกับบริการ
                หรือการเปลี่ยนแปลงของกฎหมายที่เกี่ยวข้อง
                เราจะประกาศในเว็บไซต์ของเราหรือในอุปกรณ์ของคุณเพื่อแจ้งล่วงหน้าเกี่ยวกับการเปลี่ยนแปลงที่สำคัญในนโยบายความเป็นส่วนตัว
                และจะระบุวันที่อัปเดตครั้งล่าสุดไว้ที่ด้านบน
                คุณจะสามารถดูเวอร์ชันที่เป็นปัจจุบันที่สุดของนโยบายความเป็นส่วนตัวได้ที่นี่เสมอ:
                https://account.samsung.com/membership/pp
              </p>
              <v-checkbox
                v-model="checkbox"
                :error-messages="errors"
                value="1"
                label="Option"
                type="checkbox"
                required
              ></v-checkbox>
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
    applicant: {
      username: "",
      password: "",
      email: "",
      th_prefix: "",
      th_firstname: "",
      th_lastname: "",
      eng_prefix: "",
      eng_firstname: "",
      eng_lastname: "",
      eng_address: "",
      date_birthday: new Date().toISOString().substr(0, 10),
      age: "",
    },
    data_th_prefix: ["นาย", "นาง", "นางสาว"],
    data_eng_prefix: ["Mr", "Mrs", "Miss"],
    data_Relationship :["Father","Mother","Grandfather","Grandmather"],
    checkpassword:"",
    menu: false,
    tabs: [
      { 
        id: 1, 
        icon: "mdi-account", 
        name: "FORM 1", href_tab: "#tab-1" },
      {
        id: 2,
        icon: "mdi-clipboard-file-outline",
        name: "FORM 2",
        href_tab: "#tab-2",
      },
      {
        id: 3,
        icon: "mdi-clipboard-check-outline",
        name: "FORM 3",
        href_tab: "#tab-3",
      },
    ],
    show_password: true, 
    show_password_con: true,
    usernameRules:[v1=>!!v1 || "Username is required",v2=>!!/^[a-zA-Z]{8,}$/.test(v2)|| "Name must have at least 8 letters."],
    passwordRules:[v1=>!!v1 || "Password is required", v2=>!!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(v2) || "Minimum eight characters, at least one letter and one number"],
    emailRules:[v1=>!!v1 || "Email is required", v2=>!!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v2) || "Please Check Email"],

    th_prefixRules:[v1=>!!v1 || "Please Select th-prefix"],
    th_first_nameRules:[v1=> !! v1 || "Please Enter TH First Name"],
    th_last_nameRules:[v1=> !! v1 || "Please Enter TH Last Name"],

    eng_prefixRules:[v1=>!!v1 || "Please Enter eng-prefix"],
    eng_first_nameRules:[v1=> !! v1 || "Please Enter  ENG First Name"],
    eng_last_nameRules:[v1=> !! v1 || "Please Enter ENG Last Name"],

    nationality_Rules:[v1=> !! v1 || "Please Select Your Nationality"],
    phone_numberRules:[v1=> !! v1 || "Please Enter Phone Number"],
    relationshipRules:[v1=> !! v1 || "Pleace Select Relationship"],

    addressRules:[v1=> !! v1 || "Pleace Enter your Address"],


    tab: "tab-1",
    CountryList: [
      "Afghanistan",
      "Albania",
      "Algeria",
      "American Samoa",
      "Andorra",
      "Angola",
      "Anguilla",
      "Antarctica",
      "Antigua and Barbuda",
      "Argentina",
      "Armenia",
      "Aruba",
      "Australia",
      "Austria",
      "Azerbaijan",
      "Bahamas (the)",
      "Bahrain",
      "Bangladesh",
      "Barbados",
      "Belarus",
      "Belgium",
      "Belize",
      "Benin",
      "Bermuda",
      "Bhutan",
      "Bolivia (Plurinational State of)",
      "Bonaire, Sint Eustatius and Saba",
      "Bosnia and Herzegovina",
      "Botswana",
      "Bouvet Island",
      "Brazil",
      "British Indian Ocean Territory (the)",
      "Brunei Darussalam",
      "Bulgaria",
      "Burkina Faso",
      "Burundi",
      "Cabo Verde",
      "Cambodia",
      "Cameroon",
      "Canada",
      "Cayman Islands (the)",
      "Central African Republic (the)",
      "Chad",
      "Chile",
      "China",
      "Christmas Island",
      "Cocos (Keeling) Islands (the)",
      "Colombia",
      "Comoros (the)",
      "Congo (the Democratic Republic of the)",
      "Congo (the)",
      "Cook Islands (the)",
      "Costa Rica",
      "Croatia",
      "Cuba",
      "Curaçao",
      "Cyprus",
      "Czechia",
      "Côte d'Ivoire",
      "Denmark",
      "Djibouti",
      "Dominica",
      "Dominican Republic (the)",
      "Ecuador",
      "Egypt",
      "El Salvador",
      "Equatorial Guinea",
      "Eritrea",
      "Estonia",
      "Eswatini",
      "Ethiopia",
      "Falkland Islands (the) [Malvinas]",
      "Faroe Islands (the)",
      "Fiji",
      "Finland",
      "France",
      "French Guiana",
      "French Polynesia",
      "French Southern Territories (the)",
      "Gabon",
      "Gambia (the)",
      "Georgia",
      "Germany",
      "Ghana",
      "Gibraltar",
      "Greece",
      "Greenland",
      "Grenada",
      "Guadeloupe",
      "Guam",
      "Guatemala",
      "Guernsey",
      "Guinea",
      "Guinea-Bissau",
      "Guyana",
      "Haiti",
      "Heard Island and McDonald Islands",
      "Holy See (the)",
      "Honduras",
      "Hong Kong",
      "Hungary",
      "Iceland",
      "India",
      "Indonesia",
      "Iran (Islamic Republic of)",
      "Iraq",
      "Ireland",
      "Isle of Man",
      "Israel",
      "Italy",
      "Jamaica",
      "Japan",
      "Jersey",
      "Jordan",
      "Kazakhstan",
      "Kenya",
      "Kiribati",
      "Korea (the Democratic People's Republic of)",
      "Korea (the Republic of)",
      "Kuwait",
      "Kyrgyzstan",
      "Lao People's Democratic Republic (the)",
      "Latvia",
      "Lebanon",
      "Lesotho",
      "Liberia",
      "Libya",
      "Liechtenstein",
      "Lithuania",
      "Luxembourg",
      "Macao",
      "Madagascar",
      "Malawi",
      "Malaysia",
      "Maldives",
      "Mali",
      "Malta",
      "Marshall Islands (the)",
      "Martinique",
      "Mauritania",
      "Mauritius",
      "Mayotte",
      "Mexico",
      "Micronesia (Federated States of)",
      "Moldova (the Republic of)",
      "Monaco",
      "Mongolia",
      "Montenegro",
      "Montserrat",
      "Morocco",
      "Mozambique",
      "Myanmar",
      "Namibia",
      "Nauru",
      "Nepal",
      "Netherlands (the)",
      "New Caledonia",
      "New Zealand",
      "Nicaragua",
      "Niger (the)",
      "Nigeria",
      "Niue",
      "Norfolk Island",
      "Northern Mariana Islands (the)",
      "Norway",
      "Oman",
      "Pakistan",
      "Palau",
      "Palestine, State of",
      "Panama",
      "Papua New Guinea",
      "Paraguay",
      "Peru",
      "Philippines (the)",
      "Pitcairn",
      "Poland",
      "Portugal",
      "Puerto Rico",
      "Qatar",
      "Republic of North Macedonia",
      "Romania",
      "Russian Federation (the)",
      "Rwanda",
      "Réunion",
      "Saint Barthélemy",
      "Saint Helena, Ascension and Tristan da Cunha",
      "Saint Kitts and Nevis",
      "Saint Lucia",
      "Saint Martin (French part)",
      "Saint Pierre and Miquelon",
      "Saint Vincent and the Grenadines",
      "Samoa",
      "San Marino",
      "Sao Tome and Principe",
      "Saudi Arabia",
      "Senegal",
      "Serbia",
      "Seychelles",
      "Sierra Leone",
      "Singapore",
      "Sint Maarten (Dutch part)",
      "Slovakia",
      "Slovenia",
      "Solomon Islands",
      "Somalia",
      "South Africa",
      "South Georgia and the South Sandwich Islands",
      "South Sudan",
      "Spain",
      "Sri Lanka",
      "Sudan (the)",
      "Suriname",
      "Svalbard and Jan Mayen",
      "Sweden",
      "Switzerland",
      "Syrian Arab Republic",
      "Taiwan",
      "Tajikistan",
      "Tanzania, United Republic of",
      "Thailand",
      "Timor-Leste",
      "Togo",
      "Tokelau",
      "Tonga",
      "Trinidad and Tobago",
      "Tunisia",
      "Turkey",
      "Turkmenistan",
      "Turks and Caicos Islands (the)",
      "Tuvalu",
      "Uganda",
      "Ukraine",
      "United Arab Emirates (the)",
      "United Kingdom of Great Britain and Northern Ireland (the)",
      "United States Minor Outlying Islands (the)",
      "United States of America (the)",
      "Uruguay",
      "Uzbekistan",
      "Vanuatu",
      "Venezuela (Bolivarian Republic of)",
      "Viet Nam",
      "Virgin Islands (British)",
      "Virgin Islands (U.S.)",
      "Wallis and Futuna",
      "Western Sahara",
      "Yemen",
      "Zambia",
      "Zimbabwe",
      "Åland Islands",
    ],
  }),
  methods: {
    DateToAge: function(bdate) {
      var today = new Date();
      var birthDate = new Date(bdate);
      var Real_Age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        Real_Age--;
      }

      //check value//
      if (Real_Age == 0 || Real_Age < 0) {
        Real_Age = 0;
      }
      this.applicant.age = "Age : " + Real_Age;
    },
    changeTab(tabString) {
      this.tab = "tab-" + tabString;
    },
  },
};
</script>
