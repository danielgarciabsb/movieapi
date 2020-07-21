import React from 'react';
import {connect} from 'react-redux';
import Filme from "./Filme";

class MovieList extends React.Component {

    render () {
        const { movie } = this.props;
        if(!movie) {
            return null;
        }

        return <Filme listaFilmes={movie.movies} />
    }
}

const mapStateToProps = (state, ownProps) => {

    return {movie: state.moviesbygenre.find(movie => movie.genreid===ownProps.genreid)};

};

export default connect(mapStateToProps) (MovieList);