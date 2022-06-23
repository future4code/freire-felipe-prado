import axios from "axios"
import React from "react"

const headers = {
    Authorization: "felipe-prado-freire"

}

class App extends React.Component {
  state = {
    novaPlaylist: "",
    inputNome: "",
    todasPlaylists: [] 
  }
  pegarPLaylists = () => {
   const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
   axios.get(url, {headers: headers})
   .then((response) => {
    this.setState({todasPlaylists: response.data.result.list})
   })
   .catch((error) => {
    console.log(error.response.data);
   })

  }

 createPlaylist = () => {
  const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
  const body = {
    name: this.state.novaPlaylist
  } 
  axios.post(url, body, {headers: headers})
  .then((response) => {
      console.log(response.data);
  })
  .catch((error) => {
    console.log(error.response.data);
  })
}

onChangeInputNome = (event) => {
  this.setState({
    inputNome: event.target.value
  })
}

  render() {
  return (
    <div>
      <input type="text" value={this.state.inputNome} onChange={this.onChangeInputNome}/>
      <button onClick={this.createPlaylist}>Adicionar Playlist</button>
    </div>
  )
  }
}

export default App;
