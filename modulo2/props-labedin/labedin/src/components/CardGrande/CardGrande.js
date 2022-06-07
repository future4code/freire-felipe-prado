import React from 'react';
import styled from 'styled-components'

const BigCardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;`

const ImgBigCard = styled.img`    
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`
const MeuNome = styled.h4`
    margin-bottom: 15px;
`
const Descricao = styled.p`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function CardGrande(props) {
    return (
        <BigCardContainer>
            <ImgBigCard src={ props.imagem } />
            <div>
                <MeuNome>{ props.nome }</MeuNome>
                <Descricao>{ props.descricao }</Descricao>
            </div>
        </BigCardContainer>
    )
}

export default CardGrande;