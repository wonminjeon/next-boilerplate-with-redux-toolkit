import axios from "axios";

export const fetchHello = () => {
  try {
    return axios("http://localhost:3001/asyncHello");
  } catch (error) {
    console.error(error);
  }
};
