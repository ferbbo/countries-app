import axios from 'axios';

const baseURL = 'https://restcountries.com/v2'

const instance = axios.create({
  baseURL
});

export default instance;
