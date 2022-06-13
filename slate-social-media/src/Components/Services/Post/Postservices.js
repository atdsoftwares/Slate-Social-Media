import axios from "axios";
import { useNavigate } from "react-router-dom";

async function composeNewPostFn(postDispatch, post) {
  try {
    const response = await axios({
      method: "post",
      url: "/api/posts",
      headers: { authorization: localStorage.getItem("token") },
      data: { postData: { ...post } },
    }).then((response) =>
      postDispatch({
        type: "COMPOSE_POST",
        payload: response.data.posts,
      })
    );
  } catch (error) {
    console.log(`something went wrong`, error);
  }
  postDispatch({
    type: "EDITOR_TEXT",
    payload: "",
  });
  postDispatch({
    type: "IMAGE",
    payload: null,
  });
  postDispatch({
    type: "VIDEO",
    payload: null,
  });
}

async function getComposedPostFn(postDispatch) {
  try {
    const response = await axios({
      method: "get",
      url: "/api/posts",
      headers: { authorization: localStorage.getItem("token") },
    }).then((response) =>
      postDispatch({
        type: "GET_COMPOSE_POST",
        payload: response.data.posts,
      })
    );
  } catch (error) {
    console.log(`something went wrong`, error);
  }
}

async function deletePostFn(postDispatch, _id) {
  try {
    const response = await axios({
      method: "delete",
      url: `/api/posts/${_id}`,
      headers: { authorization: localStorage.getItem("token") },
    }).then((response) =>
      postDispatch({
        type: "GET_COMPOSE_POST",
        payload: response.data.posts,
      })
    );
  } catch (error) {
    console.log(`something went wrong`, error);
  }
}

function editPostFn(_id, image, video, content) {
  localStorage.setItem("id", _id);
  localStorage.setItem("image", image);
  localStorage.setItem("video", video);
  localStorage.setItem("content", content);
}

export { composeNewPostFn, getComposedPostFn, deletePostFn, editPostFn };
