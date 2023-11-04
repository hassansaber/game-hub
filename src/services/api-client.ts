import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2287dc647b55488fabd0175a09d729d2",
  },
});
