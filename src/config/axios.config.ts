import axios from "axios";
export const AXIOS = axios.create({
  timeout: 20000,
  baseURL: "http://localhost:4000",
});

// AXIOS.interceptors.response.use(
//   function (response) {
//     // Do something with response data
//     return response;
//   },
//   function (error) {
//     if (error.statuscode === 401) {
//       localStorage.removeItem("token");
//       localStorage.removeItem("username");
//     }
//     // Do something with response error
//     return Promise.reject(error);
//   }
// );
