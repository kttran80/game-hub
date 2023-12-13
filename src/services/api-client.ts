import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a4003b6b3e3840219ae5b012172ef6c0",
  },
});
