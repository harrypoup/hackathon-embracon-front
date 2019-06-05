import axios from 'axios';

export const api = axios.create({
    baseURL: "https://harrypoup.herokuapp.com/harrypoup"
});