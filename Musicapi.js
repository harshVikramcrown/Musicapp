  import axios from "axios";

export const Musicdata = axios.create({
  baseURL: "https://itunes.apple.com/",
});