import React from "react";
import { Votacao } from "./Votacao";

export const PostCard = ({ curtir, desfazerCurtida, post, onClick }) => {
  const postDetalhes = () => {
    localStorage.setItem("post", JSON.stringify(post));
    onClick();
  };

  return (
    <div>
      <div onClick={postDetalhes}>
        {post.username}
        {post.body}
      </div>
      <Votacao
        curtir = {curtir}
        desfazerCurtida = {desfazerCurtida}
        post = {post}
      />
      {post.commentCount}
    </div>
  );
};
