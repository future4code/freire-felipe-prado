import React from "react";
import styled from "styled-components";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";

const Botao = styled.button`
display: flex;
justify-content: column;
margin: 0 auto;

`
const Container = styled.div`
display: flex;
justify-content: center;
padding: 10px;
`

class App extends React.Component {
  state = {
    etapa: 1,
  }
  renderizaEtapa = () => {
    switch(this.state.etapa){
      case 1:
        return <Etapa1/>;
      case 2:
        return <Etapa2/>;
      case 3:
        return <Etapa3/>;
      default:
        return <Final/>
    }
 }
  onClickProximaEtapa = () => {
    this.setState({
      etapa: this.state.etapa+1
    })
  } 
  render () {
  return (
    <div>
      <Container>
      {this.renderizaEtapa()}
      </Container>
      {this.state.etapa !== 4 && (
      <Botao onClick={this.onClickProximaEtapa}>Próxima etapa</Botao>
      )}
    </div>
  );
}
}
export default App;
