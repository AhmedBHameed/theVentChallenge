import axios from "axios";

const dataTransformable = (data, toJson) => {
  try {
    if (toJson) {
      data = JSON.stringify(data);
    } else {
      data = JSON.parse(data);
    }
  } catch (error) {
    console.error("Axios transformation level error", error);
  }
  return data;
};

const http = axios.create({
  baseURL: "http://localhost:5000/api/",
  transformRequest: [
    (data, headers) => {
      return dataTransformable(data, true);
    }
  ],
  transformResponse: [
    function(data) {
      return dataTransformable(data, false);
    }
  ],
  headers: { "Content-Type": "application/json" }
});

export default http;
