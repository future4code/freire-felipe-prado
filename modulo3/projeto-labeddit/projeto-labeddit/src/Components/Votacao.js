import React from "react"
import styled from "styled-components"

const Button = styled.button`
margin: 5px;
`


export const Votacao = ({curtir, desfazerCurtida, post}) => {
    
    const votoPositivo = post.userVote === 1
    const imagemPositivo = votoPositivo ?  '⏫' : '🔼'
    const votoNegativo = post.userVote === -1
    const imagemNegativo = votoNegativo ? '⏬' : '🔽'

    const pegaVotoPositivo = () => {
        return votoPositivo ? desfazerCurtida(post.id) : curtir(post.id, 1)
    }
    const pegaVotoNegativo = () => {
        return votoNegativo ? desfazerCurtida(post.id) : curtir(post.id, -1)
    }


    return(
        <div>
            <Button onClick={pegaVotoPositivo}>{imagemPositivo}</Button>
            {post.voteSum||0}
            <Button onClick={pegaVotoNegativo}>{imagemNegativo}</Button>
        </div>
    )
}