import axios from "axios";
import React from "react";

const headers = {
  Authorization: "felipe-prado-freire",
};

class App extends React.Component {
  state = {
    novaPlaylist: "",
    todasPlaylists: [],
    detalhesPlaylist: [],
    mostraDetalhes: false
  };
  componentDidMount() {
    this.pegarPLaylists();
  }
  pegarPLaylists = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    axios
      .get(url, { headers: headers })
      .then((response) => {
        this.setState({ todasPlaylists: response.data.result.list });
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  deletarPlaylist = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`;
    axios
      .delete(url, { headers: headers })
      .then(() => {
        this.pegarPLaylists();
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  playlistTracks = (id) => {
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
    axios
      .get(url, {headers: headers})
      .then((response) => {
        this.setState({
          detalhesPlaylist: response.data.result.tracks
        })
        this.abrirPlaylist()
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }
  abrirPlaylist = () => {
    this.setState({
      mostraDetalhes: true
    })
  }

  createPlaylist = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    const body = {
      name: this.state.novaPlaylist,
    };
    console.log(body);
    axios
      .post(url, body, { headers: headers })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  onChangeInputNome = (event) => {
    this.setState({
      novaPlaylist: event.target.value,
    });
  };

  render() {
    const mapearArray = this.state.todasPlaylists.map((playlist, index) => {
      return (
        <div>
          <li key={index} onClick={() => this.playlistTracks(playlist.id)}>
            {playlist.name}
            <button onClick={() => this.deletarPlaylist(playlist.id)}> delete</button>
          </li>
        </div>
      );
    });
      
    return (
      <div>
        <input
          type="text"
          value={this.state.novaPlaylist}
          onChange={this.onChangeInputNome}
        />
        <button onClick={this.createPlaylist}>Adicionar Playlist</button>
        <ol>{mapearArray}</ol>
        {this.state.mostraDetalhes === true ? (
          <div>
            {this.state.detalhesPlaylist.map((musica) => (
              <div>
                <p>Musica: {musica.name}</p>
                <p>Artista: {musica.artist} </p>
                <p>Link da música: {musica.url} </p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
