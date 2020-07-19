import React, {Component} from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";

class Filme extends Component {

    render() {
        return (
            <CardColumns>
                {this.props.listaFilmes.map(filme => (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500/" + (filme.backdrop_path || filme.poster_path)} />
                        <Card.Body>
                            <Card.Title>{filme.title}</Card.Title>
                            <Card.Text>
                                {filme.overview}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </CardColumns>
        )
    }
}

export default Filme;