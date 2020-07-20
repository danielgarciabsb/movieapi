import React, {Component} from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import withgenre from "./withgenre";

class FilmeGenre extends Component {

    state = {
        withgenres: new Map(),
    };

    async componentDidMount() {

        this.props.genres.forEach(genre => {
            withgenre.get('', {params: {with_genres: genre.id}}).then(
                response => {this.withgenres.set(genre.name, response.data.results)})
            });
    }

    render() {

        return (
            <CardColumns>
                {this.props.genres.map(genre => (
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{genre.name}</Card.Title>
                        </Card.Body>
                    </Card>
                    ))}
            </CardColumns>
        )
    }
}

export default FilmeGenre;