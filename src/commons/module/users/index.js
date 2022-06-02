import axios from "axios";

export const getDataUsers = () => {
  const URL = "https://randomuser.me/api/?results=30";
  return axios.get(URL);
};
