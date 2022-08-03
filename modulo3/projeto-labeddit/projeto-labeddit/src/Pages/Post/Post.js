import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BaseURL } from "../../Constants/baseURL";
import { useForm } from "../../Hooks/useForm";
import { useState } from "react";
import { PostCard } from "../../Components/PostCard";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { PostStyle } from "./PostStyle";
import { Votacao } from "../../Components/Votacao";

export const Post = () => {
  const [guardarPosts, setGuardarPosts] = useState([]);

  const [guardarComentarios, setGuardarComentarios] = useState([]);

  const { post } = localStorage;

  const { id } = useParams();

  const headers = {
    Authorization: localStorage.getItem("token"),
  };

  const { form, onChange, clearFields } = useForm({
    body: "",
  });

  const pegarPosts = () => {
    axios
      .get(`${BaseURL}/posts/${id}/comments`, { headers: headers })
      .then((response) => {
        setGuardarPosts(response.data);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  const pegarComentarios = () => {
    axios
      .get(`${BaseURL}/posts/${id}/comments`, { headers: headers })
      .then((response) => {
        setGuardarComentarios(response.data);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  useEffect(() => {
    pegarPosts();
    pegarComentarios();
  }, []);

  const adicionarComentario = () => {
    axios.post(`${BaseURL}/posts/${id}/comments`, form, {headers: headers})
    .then(() => {
      pegarComentarios();
    })
    .catch((error) => {
      console.log(error.data)
    })
  }

  const curtirComentario = (id, direction) => {
    const body = { direction: direction };
    axios
      .post(`${BaseURL}/posts/${id}/votes`, body, { headers: headers })
      .then(() => {
        pegarComentarios();
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  const desfazerCurtidaComentario = (id) => {
    axios
      .delete(`${BaseURL}/posts/${id}/votes`, { headers: headers })
      .then(() => {
        pegarComentarios();
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  const mapearComentarios = guardarComentarios.map((post) => {
    return (
      <div key={post.id}>
        <h3>{post.username}</h3>
        <p>{post.body}</p>

        <Votacao
          curtir={curtirComentario}
          desfazerCurtida={desfazerCurtidaComentario}
          post={post}
        />
      </div>
    );
  });

  const postParseado = JSON.parse(post);

  return (
    <PostStyle>
      <p>{postParseado.username}</p>
      <p>{postParseado.body}</p>

      <TextField
        id="outlined-basic"
        label="Adicionar Comentário"
        variant="outlined"
        name={"body"}
        value={form.body}
        onChange={onChange}
        margin={"normal"}
      />

      <Button variant="contained" onClick={() => adicionarComentario()}>
        Responder
      </Button>
      {mapearComentarios}
    </PostStyle>
  );
};
