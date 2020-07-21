import axios from 'axios';

const moviedetails = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie'
});

export default moviedetails;

