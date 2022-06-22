import axios from 'axios'
import React from 'react'

export default class App extends React.Component {
    state = {
        nome: "",
        email:""
    }
    handleNome = (event) => {
        this.setState({nome: event.target.value})
    }
    handleEmail = (event) => {
        this.setState({email: event.target.value})
    }

    fazerCadastro = () => {
       const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.nome,
            email: this.state.email
        }
       
       axios.post(url, body, {
        headers: {
            Authorization: "felipe-prado-freire"
        }
       })
       .then((response) => {
            alert("usuário(a) cadastrado(a) com sucesso!")
            this.setState({nome: "", email: ""})
       })
       .catch((error) => {
            alert(error.response.data.message)
       })
    
    }

    render () {
        return (
            <div>
                <button onClick={this.props.irParaLista}>Ir para Lista de Usuários</button>
                <h2>Cadastro</h2>
                <input placeholder={"Nome"}
                value={this.state.nome}
                onChange={this.handleNome} 
                />
                <input placeholder={"Email"}
                value={this.state.email}
                onChange={this.handleEmail}
                />
                <button onClick={this.fazerCadastro}>Cadastrar</button>
            </div>
        )
    }
}