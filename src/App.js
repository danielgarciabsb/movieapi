import React, {Component} from 'react';
import api from './api';
import trending from './trending';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Filme from './Filme'
import FilmeGenre from './FilmeGenre'
import genres from "./genres";

class App extends Component {

  state = {
    filmes: [],
    trending: [],
    genres: [],
    withgenres: new Map(),
    txt_busca: 'titanic'
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  async componentDidMount() {
    this.response = await api.get(this.state.txt_busca);
    this.trending = await trending.get();
    this.genres = await genres.get();

    this.setState({ genres: this.genres.data.genres });
    this.setState({ filmes: this.response.data.results });
    this.setState({ trending: this.trending.data.results });

  }

  handleChange(event) {
    this.setState({ txt_busca: event.target.value });
  }

  async handleClick(e) {
    e.preventDefault();
    this.response = await api.get(this.state.txt_busca);
    this.setState({ filmes: this.response.data.results });
  }

  async handleKeyDown(e) {
    if (e.key === 'Enter') {
      this.response = await api.get(this.state.txt_busca);
      this.setState({ filmes: this.response.data.results });
    }
  }

  render() {

    return (
        <Container className="p-3">
          <Jumbotron>
            <h1 className="header">Filmes por título</h1>
            <input type="text" value={this.state.txt_busca} onChange={this.handleChange} onKeyDown={this.handleKeyDown}/>
            <Button variant="primary" onClick={this.handleClick}>Buscar</Button>
            <Filme listaFilmes={this.state.filmes} />
          </Jumbotron>
          <Jumbotron>
            <h1 className="header">Trending</h1>
            <Filme listaFilmes={this.state.trending} />
          </Jumbotron>
          <Jumbotron>
            <h1 className="header">Popular</h1>
            <FilmeGenre genres={this.state.genres} />
          </Jumbotron>
        </Container>

    );
  };
}

export default App;