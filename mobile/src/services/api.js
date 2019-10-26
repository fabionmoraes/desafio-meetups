import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:3333', // No android adonis colocar o ip da rede serve
});

export default api;
