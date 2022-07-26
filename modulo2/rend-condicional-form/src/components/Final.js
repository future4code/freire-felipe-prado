import React from "react";
import styled from "styled-components";

const Titulo1 = styled.h3`
text-align: center;
`


class Final extends React.Component {
  render () {
  return (
    <div>
      <Titulo1>O FORMULÁRIO ACABOU</Titulo1>
      <h5>Muito obrigado por participar! Entraremos em contato!</h5>
    </div>
  );
}
}
export default Final;