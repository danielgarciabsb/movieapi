import axios from 'axios';

const withgenre = axios.create({
    baseURL: 'https://api.themoviedb.org/3/discover/movie?api_key=5ea8199403b084fcbe626d065e1dca09&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
});

export default withgenre;