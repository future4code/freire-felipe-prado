import React from "react";
import { Votacao } from "./Votacao";
import Card from "@mui/material/Card"
import {Box} from "@mui/system"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"

export const PostCard = ({ curtir, desfazerCurtida, post, onClick }) => {
  const postDetalhes = () => {
    localStorage.setItem("post", JSON.stringify(post));
    onClick();
  };

  return (
    <Box display="flex" m="10px" flexDirection="column">
      <Card elevation={4} sx={{minWidth: 275, maxWidth:275}}>
        <CardContent onClick={postDetalhes}>
        <p>Enviado por: {post.username}</p>
        <h4>{post.body}</h4>
        </CardContent>
      <CardActions>
      <Votacao
        curtir = {curtir}
        desfazerCurtida = {desfazerCurtida}
        post = {post}
      />
      <p onClick={postDetalhes}> 🗨️ {post.commentCount || 0 }</p>
      </CardActions>
    </Card>
    </Box>

  );
};
