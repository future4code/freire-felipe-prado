import React from "react";
import styled from "styled-components";

const MargemLi = styled.li`
margin: 5px
display: flex;
justify-content: center;
padding: 10px;
margin-left: 45px;
`
const MargemInput = styled.input`
margin: 5px
display: flex;
justify-content: center;
margin-left: 45px;
`
const MargemSelect = styled.select`
margin: 5px
display: flex;
justify-content: center;
margin-left: 45px;
`

class Etapa3 extends React.Component {
  render() {
  return (
    <div>
      <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO </h3>
        <form>
        <ol>
          <label>
            <MargemLi>Por quê você não terminou o curso de graduação?</MargemLi>
            <MargemInput type="text" name="curso"/>
          </label>
          <label>
            <MargemLi>Você fez algum curso complementar?</MargemLi>
            <MargemSelect>
            <option value="Curso Técnico">Curso Técnico</option>
            <option value="Curso de Inglês">Curso de Inglês</option>
            </MargemSelect>
          </label>
        </ol>
        </form>
        
      
    </div>
  );
}
}
export default Etapa3;