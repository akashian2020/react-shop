import http from "./httpService";

import config from "./config.json";

export const registerUser = (user) => {
  return http.post(`${config.domain}/api/register`, user);
};

export const loginUser = (user) => {
  return http.post(`${config.domain}/api/login`, JSON.stringify(user));
};
