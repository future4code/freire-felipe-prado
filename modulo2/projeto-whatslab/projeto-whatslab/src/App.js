import React from "react";
import styled from "styled-components";

const InputUsuario = styled.input`
  width: 90px;
  height: 20px;
  font-weight: bold;

`
const InputMensagem = styled.input`
  width: 300px;
  height: 20px;
`
const ListaDeMesangem = styled.div`
  height: 90vh;
  width: 95vw;
  border: 1px solid black;
  display: flex;
  flex-direction: column-reverse;
`
const BotaoEnviar = styled.button`
  height: 25px;
  font-weight: bold;
`
const NomeComMensagem = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`
const MensagemUsuario = styled.p`
  margin-left: 5px;

`


class App extends React.Component {
  state = {
    valorInputMensagem: "", // estados dos inputs vazios
    valorInputUsuario: "",
    listaDeMensagens: [],
  };
  onChangeMensagem = (event) => {
    //funçoes que controlam os inputs
    this.setState({
      valorInputMensagem: event.target.value,
    });
    console.log(this.state.valorInputMensagem);
  };
  onChangeUsuario = (event) => {
    this.setState({
      valorInputUsuario: event.target.value,
    });
    console.log(this.state.valorInputUsuario);
  };
  onClickMensagem = () => {
    const guardarMensagem = {
      nomeUsuario: this.state.valorInputUsuario,
      mensagemUsuario: this.state.valorInputMensagem,
    };
   
    const novaMensagem = [...this.state.listaDeMensagens, guardarMensagem];
    this.setState({
      listaDeMensagens: novaMensagem
    });
    this.setState({
      valorInputMensagem: "",
      valorInputUsuario: ""
    })
  };

  render() {
    const listaMensagemMapeada = this.state.listaDeMensagens.map((mensagem) => {
      return (
        <NomeComMensagem>
          <h4>{mensagem.nomeUsuario}:</h4>
          <MensagemUsuario>{mensagem.mensagemUsuario}</MensagemUsuario>
        </NomeComMensagem>
      );
    });
    return (
      <div>
        <ListaDeMesangem>
          {listaMensagemMapeada}
          </ListaDeMesangem>
        <div>
          <InputUsuario
            placeholder={"Usuário"}
            value={this.state.valorInputUsuario}
            onChange={this.onChangeUsuario}
          />
          <InputMensagem
            placeholder={"Mensagem"}
            value={this.state.valorInputMensagem}
            onChange={this.onChangeMensagem}
          />
          <BotaoEnviar onClick={this.onClickMensagem}>Enviar</BotaoEnviar>
        </div>
      </div>
    );
  }
}

export default App;
