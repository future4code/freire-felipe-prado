import React from "react"


export const Votacao = ({curtir, desfazerCurtida, post}) => {
    
    const votoPositivo = post.userVote === 1
    const imagemPositivo = votoPositivo ?  '⏫' : '🔼'
    const votoNegativo = post.userVote === -1
    const imagemNegativo = votoNegativo ? '⏬' : '🔽'

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