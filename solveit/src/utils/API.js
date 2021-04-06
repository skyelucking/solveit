import axios from "axios";

const RandomUrl = 'https://randomuser.me/api/?results=15'

const API = {
    search: function(query) {
     return axios.get(RandomUrl); 
    }
  };
  
  export default API;
