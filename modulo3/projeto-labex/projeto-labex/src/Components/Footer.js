import styled from "styled-components"
import React from "react"


const FooterStyle = styled.div`
background-color: blue;
text-align: center;
padding: 10px;
margin-bootom: 10px;
`

const Footer = () => {
    return(
    <FooterStyle>
        <h2> Labex: sua melhor opção </h2>
    </FooterStyle>
)
}

export default Footer