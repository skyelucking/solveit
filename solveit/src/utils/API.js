import axios from "axios";

const RandomUrl = 'https://randomuser.me/api/?results=15'

export default {
  search: function(query) {
   return axios.get(RandomUrl); 
  }
};
