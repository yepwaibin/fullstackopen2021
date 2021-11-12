import axios from "axios";
const BASEURL = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(BASEURL);
};

const updata = (newPerson) => {
  return axios.post(BASEURL, newPerson);
};

const deletePerson = (id) => {
  return axios.delete(BASEURL + "/" + id);
};

export default {
  getAll,
  updata,
  deletePerson,
};
