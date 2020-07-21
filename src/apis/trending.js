import axios from 'axios';

const trending = axios.create({
    baseURL: 'https://api.themoviedb.org/3/trending/movie/day?api_key=5ea8199403b084fcbe626d065e1dca09'
});

export default trending;