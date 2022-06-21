import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios'


const headers = {
  Authorization: 'felipe-prado-freire'
}

class App extends React.Component {
  state = {
    inputNome: "",
    inputEmail: ""
  }

  onChangeInputNome = (event) => {
    this.setState({
      inputNome: event.target.value
    })
  }
  onChangeInputEmail = (event) => {
    this.setState({
      inputEmail: event.target.value
    })
  }

  addUser = () => {
    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail
    }
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    axios.post(url, body,{
    headers: headers
  }
  ).then ((response) => {
    console.log(response.status)
    alert("usuário aceito")
  }).catch ((error) => {
    alert (error.message)
  })
} 

  render () {
    return (
      <div> 
          <input type="text" value={this.state.inputNome} onChange={this.onChangeInputNome} placeholder="Nome"/>
          <input type="text" value={this.state.inputEmail} onChange={this.onChangeInputEmail} placeholder="Email"/> 
          <button onClick={this.addUser}>criar usuário</button>
      </div>
      
    )  
  }
}

export default App;
