import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BaseURL } from "../../Constants/baseURL";
import { useForm } from "../../Hooks/useForm";
import { useState } from "react";
import { PostCard } from "../../Components/PostCard";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import {PostStyle} from "./PostStyle"

export const Post = () => {
  
    const [guardarPosts, setGuardarPosts] = useState([]);

  const{post} = localStorage

  const {id} = useParams()

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
        setGuardarPosts(response.data)
      })
      .catch((error) => {
        console.log(error.data);
      });
  }

  useEffect(() => {
    pegarPosts();
  }, []);

  const mapearPosts = guardarPosts.map((post) => {
    return (
      <div key={post.id}>
        {post.username}
        {post.body}
        <PostCard
          post={post}
        />
      </div>
    );
  });

  const postParseado = JSON.parse(post)

  return (
    <PostStyle>
        <h3>{postParseado.username}</h3>
        <p>{postParseado.body}</p>
      
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          name={"title"}
          value={form.title}
          onChange={onChange}
          margin={"normal"}
        />
        <TextField
          id="outlined-basic"
          label="Escreva seu Post"
          variant="outlined"
          name={"body"}
          value={form.body}
          onChange={onChange}
        />
       
        {/* <Button variant="contained" onClick={""}>
          Postar
        </Button> */}
        {mapearPosts}
    </PostStyle>
  );
};
