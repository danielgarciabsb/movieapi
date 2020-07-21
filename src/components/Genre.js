import React from 'react';
import {connect} from 'react-redux';
import {fetchGenresAndMovies} from "../apis";
import MovieList from './MovieList';

class Genre extends React.Component{
    componentDidMount() {
        this.props.fetchGenresAndMovies();
    }

    renderList(){
        return this.props.genres.map(genre=> {

            return (
                <div className = "item" key={genre.id}>
                    <i className = "large middle aligned icon user" />
                    <div className = "content">
                        <div className = "description">
                            <h2>{genre.name}</h2>
                            <MovieList genreid={genre.id}/>
                        </div>
                    </div>
                </div>
            );

        });
    }

    render(){

        return <div className="ui relaxed divided list">{this.renderList()}</div>;
    }

}

const mapStateToProps = (state) => {

    return {genres: state.genres}
};
export default connect(mapStateToProps, { fetchGenresAndMovies }) (Genre);