import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToPost } from "../../Routes/Coordinator";
import { BaseURL } from "../../Constants/baseURL";
import { useForm } from "../../Hooks/useForm";
import { useState } from "react";
import { PostCard } from "../../Components/PostCard";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { FeedStyle, FeedBody } from "./FeedStyle";

export const Feed = () => {
  const [guardarPosts, setGuardarPosts] = useState([]);

  const navigate = useNavigate();

  const headers = {
    Authorization: localStorage.getItem("token"),
  };

  const { form, onChange, clearFields } = useForm({
    title: "",
    body: "",
  });

  const postar = () => {
    axios
      .post(`${BaseURL}/posts`, form, { headers: headers })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  const pegarPosts = () => {
    axios
      .get(`${BaseURL}/posts`, { headers: headers })
      .then((response) => {
        setGuardarPosts(response.data);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  useEffect(() => {
    pegarPosts();
  }, []);

  const curtir = (id, direction) => {
    const body = { direction: direction };
    axios
      .post(`${BaseURL}/posts/${id}/votes`, body, { headers: headers })
      .then(() => {
        pegarPosts();
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  const desfazerCurtida = (id) => {
    axios
      .delete(`${BaseURL}/posts/${id}/votes`, { headers: headers })
      .then(() => {
        pegarPosts();
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  const mapearPosts = guardarPosts.map((post) => {
    return (
      <div key={post.id}>
        <PostCard
          curtir={curtir}
          desfazerCurtida={desfazerCurtida}
          post={post}
          onClick={() => goToPost(navigate, post.id)}
        />
      </div>
    );
  });

  return (
    <FeedBody>
      <FeedStyle>
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
        </FeedStyle>
        <Button variant="contained" onClick={postar}>
          Postar
        </Button>
        {mapearPosts}
      
    </FeedBody>
  );
};
