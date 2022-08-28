import axios from "axios";
const url = "http://localhost:5000/api/";
const urlOferts = url + "oferts/";

export const getOfertsRequest = () => axios.get(urlOferts);

export const getOfertRequest = (id) => axios.get(urlOferts + id);

export const deleteOfertRequest = (id) => axios.delete(urlOferts + id);

export const createOfertRequest = (ofert) => {
  console.log(ofert);
  return axios.post(urlOferts, ofert);
};

export const updateOfertRequest = (id, newInfoOfert) =>
  axios.put(urlOferts + id, newInfoOfert);
