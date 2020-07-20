import axios from 'axios';

const genres = axios.create({
    baseURL: 'https://api.themoviedb.org/3/genre/movie/list?api_key=5ea8199403b084fcbe626d065e1dca09&language=pt-BR'
});

export default genres;