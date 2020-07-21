import _ from 'lodash';
import genres from '../apis/genres';
import withgenre from "./withgenre";

export const fetchGenres =  () => async dispatch => {

    const response =  await genres.get();

    dispatch({type: 'FETCH_GENRES', payload: response.data.genres})

};

export const fetchMoviesOnGenre = id => async dispatch => {

    const response =  await withgenre.get('', {params: {with_genres: id}});
    dispatch({type: 'FETCH_MOVIES_ON_GENRE', payload: {genreid: id, movies: response.data.results}});
};

export const fetchGenresAndMovies = () => async (dispatch, getState) => {

    await dispatch(fetchGenres());

    const genresIds = _.uniq( _.map(getState().genres,'id'));
    genresIds.forEach(id => dispatch(fetchMoviesOnGenre(id)));
};