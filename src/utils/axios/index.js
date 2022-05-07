import axios from "axios";

let http = axios.create({
    baseURL: "/api",
    withCredentials: true,
    timeout: 1000 * 10,
  });

  http.interceptors.request.use(
    function (config) {
      


        return config
    }
  );

  http.interceptors.response.use(
    function (config) {
      
        console.log(config)
        return config
    }
  );
  export default http;