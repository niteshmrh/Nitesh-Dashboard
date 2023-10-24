import axios from "axios";

// ### Development Environment
const BASE_URL = "http://localhost:9100/collection/customerDetails";
const APP_ID = "4275ddcccdedb9d9e9ba5b7fa75d2d1d";
const APP_NAME = "HAPPYLOAN_STPQ";

// ### Live Environment
// const BASE_URL = "https://stageapi.faircent.com";
// const APP_ID = "";
// const APP_NAME = "";

const requestApi = async (request) => {
  try {
    const response = await axios({
      url: BASE_URL + request.url,
      method: request.method,
      data: request.data,
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        "x-application-id": APP_ID,
        "x-application-name": APP_NAME,
      },
    });
    return response.data;
  } catch (error) {
    console.log("API Error", error);
    return error;
  }
};

export { BASE_URL, requestApi };
