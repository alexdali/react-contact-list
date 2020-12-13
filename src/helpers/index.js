import axios from 'axios';

const baseURL='truly-contacts.herokuapp.com/api';
let headers={};

if(localStorage.token) {
  headers.Authorization = `Bearer ${localStorage.token}`;
}

const axiosInstance = axios.create({
  baseURL,
  headers
})

export default axiosInstance;