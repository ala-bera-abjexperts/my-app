import axios from "axios";

interface APIInputType {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  header?: Object;
  data?: Object;
}

export function api(input: APIInputType) {
  try {
    switch (input.method) {
      case "GET":
        return axios.get(`/api/${input.url}`);
      case "POST":
        return axios.post(`/api/${input.url}`, input.data);
      case "PUT":
        return axios.put(`/api/${input.url}`, input.data);
      case "DELETE":
        return axios.delete(`/api/${input.url}`, input.data);
      default:
        throw new Error("Http method " + input.method + " is not found");
    }
  } catch (err) {
    console.error("error in api ", err);
    throw err;
  }
}
