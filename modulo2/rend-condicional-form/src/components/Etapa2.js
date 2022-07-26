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

class Etapa2 extends React.Component {
  render () {
    return (
    <div>
      <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
        <form>
        <ol>
          <label>
            <MargemLi> Qual curso?</MargemLi>
            <MargemInput type="text" name="curso"/>
          </label>
          <label>
            <MargemLi>Qual a unidade de ensino?</MargemLi>
            <MargemInput type="text" name="unidade de ensino"/>
          </label>
        </ol>
        </form>
        
    </div>
  );
}
}
export default Etapa2;