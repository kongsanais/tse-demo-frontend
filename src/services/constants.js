//////////////// Localization Begin ////////////////
export const NETWORK_CONNECTION_MESSAGE = "Cannot connect to server, Please try again.";
export const NETWORK_TIMEOUT_MESSAGE = "A network timeout has occurred, Please try again.";
export const UPLOAD_PHOTO_FAIL_MESSAGE = "An error has occurred. The photo was unable to upload.";
export const NOT_CONNECT_NETWORK = "NOT_CONNECT_NETWORK";

export const apiUrl = "http://localhost:3000";
export const imageUrl = "http://localhost:3000/images";
export const resumeUrl = "http://localhost:3000/resume"


export const server = {
  LOGIN_URL: `api/users/login`,
  REGISTER_URL: `api/users`,
  USER_PROFILE: `api/users/profile`,
  LOGOUT_URL: `api/users/logout`,
  UPDATE_PROFILE: `api/users/update`, 
  GET_ALL_APP: `api/users/all/engineer`, 
  GET_ALL_APP_BY_DATE: 'api/users/allByDate',
  GET_ONE_APP: 'api/users/get_appProfile',
  GET_STATUS_DATA : 'api/users/count_status',
  GET_STATUS_DATA_REG_YEAR : 'api/users/count_reg_year',
  GET_DATA_EXPORT_EXCEL: 'api/users/get_json_export',
  UPDATE_REG_STATUS : 'api/users/update_reg_status',
  ROLE:'role',
  TRANSACTION_URL: `transaction`,
  TOKEN_KEY: `token`,
  USERNAME: `username`
};


export const admin = {
  REGISTER_URL : 'api/admin/register',
  LOGIN_URL : 'api/admin/login',
  LOGOUT_URL : 'api/admin/logout',
  TOKEN_KEY: `token`,
  USERNAME: `username`,
  ROLE:'role'
}


// location /images {
//   proxy_pass http://172.31.39.222:3000;
//   proxy_http_version 1.1;
//   proxy_set_header Upgrade $http_upgrade;
//   proxy_set_header Connection 'upgrade';
//   proxy_set_header Host $host;
//   proxy_cache_bypass $http_upgrade;
// }


// location /resume {
//   proxy_pass http://172.31.39.222:3000;
//   proxy_http_version 1.1;
//   proxy_set_header Upgrade $http_upgrade;
//   proxy_set_header Connection 'upgrade';
//   proxy_set_header Host $host;
//   proxy_cache_bypass $http_upgrade;
// }

