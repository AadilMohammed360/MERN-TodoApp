// todo-frontend/src/axios.js 
import axios from 'axios'; 
 
const instance = axios.create({ 
    baseURL: 'http://localhost:8000/', // Base URL for the backend API 
}); 
 
export default instance; 
