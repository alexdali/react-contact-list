// import 'dotenv/config';
import dotenv from 'dotenv'
import axios from 'axios';
dotenv.config()
// require('dotenv').config();


const baseURL=process.env.REACT_APP_BACKEND_URL;
// const baseURL='https://truly-contacts.herokuapp.com/api'
console.log(process.env.REACT_APP_BACKEND_URL);
console.log('baseURL: ', baseURL);

let headers={};

if(localStorage.token) {
  headers.Authorization = `Bearer ${localStorage.token}`;
}

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers,
});

export default axiosInstance;