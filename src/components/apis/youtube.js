//used google dev console to restrict api keys
// change when using heroku!!!

import axios from "axios";

const KEY = "AIzaSyCKCqk9XCuuBDnvi5lAHw8LAEj_jMV_8HQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
