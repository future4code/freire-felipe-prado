import React from "react";
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 50px;
`
function CardPequeno(props) {
  return (
    <div>
      <Container>
        <p>Email: {props.email}</p>
      </Container>
      <Container>
        <p>Endereço: {props.endereco}</p>
      </Container>
    </div>
  );
}
export default CardPequeno;
