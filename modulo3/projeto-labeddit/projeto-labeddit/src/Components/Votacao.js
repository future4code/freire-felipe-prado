import React from "react"
import setaPreta from '../imagens/setaPreta.png'
import setaBranca from '../imagens/setaBranca.png'
import downPreta from '../imagens/downPreta.png'
import downBranca from '../imagens/downBranca.png'

export const Votacao = ({curtir, desfazerCurtida, post}) => {
    
    const votoPositivo = post.userVote === 1
    const imagemPositivo = votoPositivo ? `${setaPreta}` : `${setaBranca}`
    const votoNegativo = post.userVote === -1
    const imagemNegativo = votoNegativo ? `${downPreta}` : `${downBranca}`

    const pegaVotoPositivo = () => {
        return votoPositivo ? desfazerCurtida(post.id) : curtir(post.id, 1)
    }
    const pegaVotoNegativo = () => {
        return votoNegativo ? desfazerCurtida(post.id) : curtir(post.id, 1)
    }


    return(
        <div>
            <button onClick={pegaVotoPositivo}>{imagemPositivo}</button>
            {post.voteSum||0}
            <button onClick={pegaVotoNegativo}>{imagemNegativo}</button>
        </div>
    )
}