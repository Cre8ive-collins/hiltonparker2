import axios from "axios";
window.localStorage.setItem('token', 'HHHHHHH')
let token = window.localStorage.getItem('token')


export const api = axios.create({
    // headers: {'User_token': token},
    baseURL: "http://localhost:3040/v1", 
});