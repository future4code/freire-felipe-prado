import React from "react"

export const Votacao = ({curtir, desfazerCurtida, post}) => {
    
    const votoPositivo = post.userVote === 1
    const votoNegativo = post.userVote === -1

    const pegaVotoPositivo = () => {
        return votoPositivo ? desfazerCurtida(post.id) : curtir(post.id, 1)
    }
    const pegaVotoNegativo = () => {
        return votoNegativo ? desfazerCurtida(post.id) : curtir(post.id, 1)
    }


    return(
        <div>
            <button onClick={pegaVotoPositivo}></button>
            {post.voteSum||0}
            <button onClick={pegaVotoNegativo}></button>
        </div>
    )
}