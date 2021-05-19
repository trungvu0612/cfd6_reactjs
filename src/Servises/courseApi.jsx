import { endpoint } from "./config";

const courseApi = {
  list(data) {
    return fetch(`${endpoint}/elearning/v4/courses`, {
      method: "GET",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json()); //promise
  },
};

export default courseApi;
