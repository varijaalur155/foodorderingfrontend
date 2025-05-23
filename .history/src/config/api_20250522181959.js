import axios from 'axios';

export const API_URL = "https://foodorderingbackend-zpso.onrender.com";
export const DEPLOYED_URL = "https://foodorderingbackend-zpso.onrender.com"
//export const API_URL = "http://localhost:5454";


export const api = axios.create({
  baseURL: API_URL, 
  headers: {
    'Content-Type': 'application/json',
  },
});


