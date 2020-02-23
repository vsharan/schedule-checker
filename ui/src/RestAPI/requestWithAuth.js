import axios from "axios";
import config from "../constant/config";

const client = axios.create({
  basrURL: config.basrURL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    authorization: localStorage.get("token")
  }
});

export const request = async options => {
  const onSuccess = function(response) {
    console.log("Request Successfully", response);
    return response.data;
  };
  const onError = function(error) {
    console.error("Request Failed:", error.config);
    if (error.response) {
      //Request  was made but server respond with some message
      console.error("Status:", error.response.status);
      console.error("Data:", error.response.data);
      console.error("Headers:", error.response.headers);
    } else {
      // Something else happened while setting up the request
      return Promise.reject(error.response || error.message);
    }
  };
  return client(options)
    .then(onSuccess)
    .catch(onError);
};
