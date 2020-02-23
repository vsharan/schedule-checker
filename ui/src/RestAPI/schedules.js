import { request } from "./request";

export const getUsers = async () => {
  return await request("/users", "GET");
};

export const getUserById = async userId => {
  return await request({ url: `/users/${userId}`, method: "GET" });
};

export const postUser = async data => {
  return await request({ url: "/users", method: "POST", data });
};
