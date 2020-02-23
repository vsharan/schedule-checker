import { request } from "./request";

export const getUsersSchedule = async () => {
  return await request("/users/schedules", "GET");
};

export const getUserById = async userId => {
  return await request({ url: `/users/schedules/${userId}`, method: "GET" });
};

export const postUser = async data => {
  return await request({ url: "/schedules", method: "POST", data });
};
