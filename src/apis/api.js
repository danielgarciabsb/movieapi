import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/search/movie?api_key=5ea8199403b084fcbe626d065e1dca09&language=pt-BR&query='
});

export default api;