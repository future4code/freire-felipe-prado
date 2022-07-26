import React from "react";
import styled from "styled-components";

const MargemInput = styled.input`
margin: 5px;
` 
const MargimLi = styled.li`
margin: 5px;
`
const MargemSelect = styled.select`
margin: 5px;
`

class Etapa1 extends React.Component {
  render() {
    return (
    <div>
        <h3>ETAPA 1 - DADOS GERAIS</h3>
        <form>
            <ol>
            <label>
               <MargimLi> Qual é seu nome?</MargimLi>
               <MargemInput type="text" name="nome"/>
            </label>
             <label>
                <MargimLi> Qual é sua idade?</MargimLi>
                <MargemInput type="text" name="idade"/>
            </label>
             <label>
                <MargimLi>Qual é seu email?</MargimLi>
                <MargemInput type="text" name="email"/>
            </label>
            <label>
            <MargimLi>Qual é sua escolaridade?</MargimLi>
            <MargemSelect>
                <option value="Ensino Médio Incompleto">Ensino Médio Incompleto</option>
                <option value="Ensino Médio Completo">Ensino Médio Completo</option>
                <option value="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
                <option value="Ensino Superior Completo">Ensino Superior Completo</option>
            </MargemSelect>
            </label>
            </ol>
        </form>
        
      
    </div>
  );
}
}

export default Etapa1;