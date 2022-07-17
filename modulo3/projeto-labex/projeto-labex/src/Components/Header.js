import styled from "styled-components"
import React from "react"

const HeaderStyle = styled.div`
background-color: blue;
text-align: center;
padding: 10px;
`

const Titulo = styled.h2`

`

const Header = () => {
    return(
    <HeaderStyle>
    <Titulo> LABEX </Titulo>
    <p> Garanta sua viagem segura e conformtável por um preço acessível! </p>
    </HeaderStyle>
    )
}

export default Header