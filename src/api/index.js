import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

const instance = axios.create({
  baseURL: BASE_URL,
});

export class Api {
  static fetchPosts(page, limit) {
    return instance.get("/posts", {
      params: {
        _page: page,
        _limit: limit,
      },
    });
  }
}
