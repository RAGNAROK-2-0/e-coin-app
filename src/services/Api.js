import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://e-coin-api.herokuapp.com/'
});

export { Api };