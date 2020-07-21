import React, {Component} from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import CardColumns from "react-bootstrap/CardColumns";
import Image from "react-bootstrap/Image";
import moviedetails from "../apis/moviedetails";

class Filme extends Component {

    state = {
        showModal: null,
        movieDetails: ''
    };

    constructor(props) {
        super(props);
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.getMovieDetails = this.getMovieDetails.bind(this);
    }

    showModal(id) {
        this.getMovieDetails(id);
        this.setState({showModal: id});
    }

    hideModal() {
        this.setState({showModal: null});
    }

    async getMovieDetails(id) {
        const response =  await moviedetails.get(id.toString(), {params: {api_key: '5ea8199403b084fcbe626d065e1dca09', language: 'pt-BR'}});
        this.setState({movieDetails: response.data});
    }

    render() {
        return (
            <CardColumns>
                {this.props.listaFilmes.map(filme => (
                    <>
                    <Card style={{ width: '18rem' }} onClick={() => this.showModal(filme.id)}>
                        <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500/" + (filme.backdrop_path || filme.poster_path)} />
                        <Card.Body>
                            <Card.Title>{filme.title}</Card.Title>
                            <Card.Text>
                                {filme.overview}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Modal show={this.state.showModal === filme.id} onHide={this.hideModal} aria-labelledby="contained-modal-title-vcenter" centered>
                        <Modal.Header>
                            <Modal.Title>{filme.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Image src={"https://image.tmdb.org/t/p/w500/" + (filme.backdrop_path || filme.poster_path)} fluid />
                            <b>Titulo Original:</b> {filme.original_title} <br />
                            <b>Duração:</b> {this.state.movieDetails.runtime} min <br />
                            <b>Popularidade:</b> {this.state.movieDetails.popularity} <br />
                            <b>Sumário:</b> {filme.overview} <br />
                            <b>Homepage:</b> <a href={`${this.state.movieDetails.homepage}`} target="_blank">{this.state.movieDetails.homepage}</a> <br />
                        </Modal.Body>
                        <Modal.Footer>
                            <button onClick={this.hideModal}>Fechar</button>
                        </Modal.Footer>
                    </Modal>
                    </>
                ))}
            </CardColumns>
        )
    }
}

export default Filme;