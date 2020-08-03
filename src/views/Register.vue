<template>

  <v-container grid-list-xs>
    <v-card>

      <v-toolbar flat color="primary" dark>
        <v-toolbar-title>Form Register</v-toolbar-title>
      </v-toolbar>

      <v-tabs v-model="tab" vertical>
        <v-tab
          class="mr-2 d-none d-sm-flex"
          v-for="tab in tabs"
          :key="tab.id"
          :href="tab.href_tab"
          exact
        >
          <v-icon left>{{ tab.icon }}</v-icon>
          {{ tab.name }}
        </v-tab>

        <v-tab-item value="tab-1">
          <v-card flat>
            <v-card-text>
              <v-form>
                {{applicant}}
                <v-row>

                  <!-- E-mail -->
                  <v-col class="d-flex" xl="4" lg="3" md="3" sm="12" cols="12">
                    <v-text-field
                      v-model="applicant.email"
                      type="email"
                      label="Email"
                      :rules="emailRules"
                    >
                    </v-text-field>
                  </v-col>

                  <!-- Password -->
                  <v-col class="d-flex" xl="4" lg="3" md="3" sm="12" cols="12">
                    <v-text-field
                      v-model="applicant.password"
                      label="Password"
                      min="8"
                      :append-icon="
                        show_password ? 'visibility' : 'visibility_off'
                      "
                      @click:append="show_password = !show_password"
                      :type="show_password ? 'password' : 'text'"
                      :rules="passwordRules"
                      required
                    />
                  </v-col>


                  <!-- Confirm Password -->
                  <v-col class="d-flex" xl="4" lg="3" md="3" sm="12" cols="12">
                    <v-text-field
                      v-model="checkpassword"
                      label="Confirm Password"
                      min="8"
                      :append-icon="
                        show_password_con ? 'visibility' : 'visibility_off'
                      "
                      @click:append="show_password_con = !show_password_con"
                      :type="show_password_con ? 'password' : 'text'"
                      :rules="[
                        applicant.password === checkpassword ||
                          'Password must match',
                      ]"
                      required
                    />
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
                      v-model="applicant.nationality"
                      :items="CountryList"
                      label="Nationality"
                      :rules="nationality_Rules"
                    ></v-select>
                  </v-col>

                  <!-- Phone number -->
                  <v-col class="d-flex" xl="3" lg="3" md="3" sm="3" cols="12">
                    <v-text-field
                      v-model="applicant.phone_number"
                      label="Your Phone Number"
                      type="number"
                      min="0"
                      :rules="phone_numberRules"
                    >
                    </v-text-field>
                  </v-col>

                  <!-- Phone number  family-->
                  <v-col class="d-flex" xl="3" lg="3" md="3" sm="3" cols="12">
                    <v-text-field
                      v-model="applicant.phone_number_famaily"
                      label="Phone Number Family"
                      type="number"
                      min="0"
                      :rules="phone_numberRules"
                    >
                    </v-text-field>
                  </v-col>

                  <!-- Relationship -->
                  <v-col class="d-flex" xl="3" lg="3" md="2" sm="3" cols="12">
                    <v-select
                      v-model="applicant.person_relationship"
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
                <!-- Review imgage -->
                <v-col class="d-flex" xl="2" lg="4" md="4" sm="12" cols="12">
                  <img
                    v-if="imageURL"
                    :src="imageURL"
                    style="width=height:150px;width:220px;border-style: groove;"
                  />
                </v-col>

                <!-- upload img file input and resume -->
                <v-col class="d-flex" xl="5" lg="4" md="6" sm="12" cols="12">
                  <v-card  outlined>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title class="headline mb-6"
                          >Upload</v-list-item-title
                        >
                        <v-list-item-subtitle>
                          <!--btn upload profile picture-->
                          <v-btn
                            class="mt-1 mr-2"
                            color="#"
                            @click="$refs.inputUpload_img.click()"
                            v-model="message_filename_pic"
                          >
                            <!-- i-con in btn -->
                            <v-icon class="mr-2">mdi-cloud-upload</v-icon>
                            {{ message_filename_pic }}
                          </v-btn>

                          <!-- i-con check  if -->
                          <v-icon
                            v-if="applicant.imageURL == null"
                            color="warning"
                            class="mdi mdi-36px"
                          >
                            mdi-alert-circle-outline</v-icon
                          >

                          <v-icon v-else color="success" class="mdi mdi-36px"
                            >mdi-check-circle-outline</v-icon
                          >

                          <!-- input file for upload  -->
                          <input
                            type="file"
                            style="display: none"
                            ref="inputUpload_img"
                            @change="onFile_img"
                          />

                          <br />

                          <!-- btn upload resume/cv -->
                          <v-btn
                            class="mt-3 mr-1"
                            depressed
                            color="#"
                            @click="$refs.inputUpload_resume.click()"
                            v-model="message_filename_resume"
                          >
                            <!-- i-con in btn -->
                            <v-icon class="mr-2">mdi-cloud-upload</v-icon>
                            {{ message_filename_resume }}
                          </v-btn>

                          <!-- i-con check  if -->
                          <v-icon
                            v-if="applicant.resumeURL == null"
                            color="warning"
                            class="mdi mdi-36px mt-3"
                            >mdi-alert-circle-outline</v-icon
                          >
                          <v-icon v-else color="success" class="mdi mdi-36px"
                            >mdi-check-circle-outline</v-icon
                          >

                          <!-- input file for upload  -->
                          <input
                            type="file"
                            style="display: none"
                            ref="inputUpload_resume"
                            @change="onFile_resume"
                          />
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card>
                </v-col>
              </v-row>


                <v-row>
                  <!-- Level -->
                  <v-col class="d-flex" xl="3" lg="3" md="3" sm="12" cols="12">
                          <v-select
                            v-model="applicant.job_level"
                            :items="data_level"
                            label="Level"
                            :rules="level_Rules"
                          >
                          </v-select>
                  </v-col>
                </v-row>



                <v-row>
                  <!-- Position -->
                  <v-col class="d-flex" xl="3" lg="3" md="3" sm="12" cols="12">
                          <v-select
                            v-model="applicant.job_position"
                            :items="data_position"
                            label="Position"
                            :rules="position_Rules"
                          >
                          </v-select>
                  </v-col>
                </v-row>

                  
                  <v-row>
                  <!-- Salary -->
                  <v-col class="d-flex" xl="3" lg="3" md="3" sm="12" cols="12">
                    <v-text-field
                    v-model="applicant.job_salary"
                      label="Salary"
                      type="number"
                      min=0
                      :rules="salary_Rules"
                    >
                    </v-text-field>
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

              <!-- <input type="checkbox" id="checkbox" v-model="checked">
              <label for="checkbox">{{ checked }}</label> -->
                
              <v-row>
                  <v-checkbox
                    class="ml-2"
                    label="Accept"
                    type="checkbox"
                    small
                    required
                  >
                  </v-checkbox>
              </v-row>
              
              <v-row>
                  <v-spacer></v-spacer>
                  <v-btn class="primary mr-3" @click="changeTab(2)">
                    Next
                  </v-btn>
              </v-row>


               
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
      email: "",
      password: "",
      th_prefix: "",
      th_firstname: "",
      th_lastname: "",
      eng_prefix: "",
      eng_firstname: "",
      eng_lastname: "",
      nationality:"",
      phone_number:"",
      phone_number_famaily:"",
      person_relationship:"",
      eng_address: "",
      date_birthday: new Date().toISOString().substr(0, 10),
      age: "",
      imageURL: null,
      resumeURL: null,
      job_level:"",
      job_position:"",
      job_salary:""
    },
    data_th_prefix: ["นาย", "นาง", "นางสาว"],
    data_eng_prefix: ["Mr", "Mrs", "Miss"],
    data_Relationship: ["Father", "Mother", "Grandfather", "Grandmather","Other"],
    checkpassword: "",
    data_level :['Office/Engineer','Management'],
    data_position: ['Developer','Data Analysis'],
    menu: false,
    tabs: [
      {
        id: 1,
        icon: "mdi-account",
        name: "FORM 1",
        href_tab: "#tab-1",
      },
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
    usernameRules: [
      (v1) => !!v1 || "Username is required",
      (v2) =>
        !!/^[a-zA-Z]{8,}$/.test(v2) || "Name must have at least 8 letters.",
    ],
    passwordRules: [
      (v1) => !!v1 || "Password is required",
      (v2) =>
        !!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(v2) ||
        "Minimum eight characters, at least one letter and one number",
    ],
    emailRules: [
      (v1) => !!v1 || "Email is required",
      (v2) =>
        !!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          v2
        ) || "Please Check Email",
    ],

    th_prefixRules: [(v1) => !!v1 || "Please Select th-prefix"],
    th_first_nameRules: [(v1) => !!v1 || "Please Enter TH First Name"],
    th_last_nameRules: [(v1) => !!v1 || "Please Enter TH Last Name"],

    eng_prefixRules: [(v1) => !!v1 || "Please Enter eng-prefix"],
    eng_first_nameRules: [(v1) => !!v1 || "Please Enter  ENG First Name"],
    eng_last_nameRules: [(v1) => !!v1 || "Please Enter ENG Last Name"],

    nationality_Rules: [(v1) => !!v1 || "Please Select Your Nationality"],
    phone_numberRules: [(v1) => !!v1 || "Please Enter Phone Number"],
    relationshipRules: [(v1) => !!v1 || "Pleace Select Relationship"],

    level_Rules: [(v1) => !!v1 || "Please Select Level"],
    position_Rules: [(v1) => !!v1 || "Please Select Position"],
    salary_Rules: [(v1) => !!v1 || "Please Enter Salary"],


    addressRules: [(v1) => !!v1 || "Pleace Enter your Address"],
    imageURL: "https://image.flaticon.com/icons/svg/882/882849.svg",
    tab: "tab-1",
    CountryList: ["Thailand"],
    message_filename_pic: "Upload Profile Picture",
    message_filename_resume: " Upload Resume / CV",
    
    
  }),
  methods: {
    DateToAge: function(bdate) {

      var today = new Date();
      var birthDate = new Date(bdate);
      var person_age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        person_age--;
      }
      //check value//
      if (person_age == 0 || person_age < 0) {
        person_age = 0;
      }
      this.applicant.age = "Age : " + person_age;

    },
    onFile_img(event) {

      const reader = new FileReader();
      reader.onload = (event) => {
        // for preview get img
        this.imageURL = event.target.result;
      };
      //get file size //
      var _size = event.target.files[0].size;
      var _name = event.target.files[0].name;
      var _file_type = _name.split(".").pop();
      var fSExt = new Array("Bytes", "KB", "MB", "GB"),
        i = 0;
      while (_size > 900) {
        _size /= 1024;
        i++;
      }
      var exactSize = Math.round(_size * 100) / 100 + " " + fSExt[i];
      //console.log("FILE SIZE = ", exactSize);
      //check file type and type file //
      if (_size < 10485760 && (_file_type == "png" || _file_type == "jpg")) {
        reader.readAsDataURL(event.target.files[0]);
        // for upload
        this.applicant.imageURL = event.target.files[0];
        this.message_filename_pic = _name + "(" + exactSize + ")";
      } else {
        alert("Pls Check File Size or File Type");
        this.applicant.imageURL = null;
      }

    },
    onFile_resume(event) {

      const reader = new FileReader();
      //get file size //
      var _size = event.target.files[0].size;
      var _name = event.target.files[0].name;
      var _file_type = _name.split(".").pop();
      var fSExt = new Array("Bytes", "KB", "MB", "GB"),
        i = 0;
      while (_size > 900) {
        _size /= 1024;
        i++;
      }
      var exactSize = Math.round(_size * 100) / 100 + " " + fSExt[i];
      //console.log("FILE SIZE = ", exactSize);
      //check file type and type file //
      if (_size < 10485760 && (_file_type == "pdf" || _file_type == "docx")) {
        reader.readAsDataURL(event.target.files[0]);
        // for upload
        this.applicant.resumeURL = event.target.files[0];
        this.message_filename_resume = _name + "(" + exactSize + ")";
      } else {
        alert("Pls Check File Size or File Type");
        this.applicant.resumeURL = null;
      }

    },
    changeTab(tabString) {

      this.tab = "tab-" + tabString;

    },
  },
};
</script>
