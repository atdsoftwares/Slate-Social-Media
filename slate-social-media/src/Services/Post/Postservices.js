import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "../../Utils/SystemUtils";

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
    toast.success("Post successfully created");
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
    toast.success("Post successfully created");
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
    toast.success("Post successfully deleted");
  } catch (error) {
    console.log(`something went wrong`, error);
  }
}

function editPostFn(_id, image, video, content) {
  localStorage.setItem("id", _id);
  localStorage.setItem("image", image);
  localStorage.setItem("video", video);
  localStorage.setItem("content", content);
  toast.success("Post can be edited");
}

async function addPostToBookmarkFn(postDispatch, _id) {
  try {
    const response = await axios({
      method: "post",
      url: `/api/users/bookmark/${_id}`,
      headers: { authorization: localStorage.getItem("token") },
      data: {},
    }).then((response) =>
      postDispatch({
        type: "ADD_TO_BOOKMARKS",
        payload: response.data.bookmarks,
      })
    );
    toast.success("Post successfully added to bookmarks");
  } catch (error) {
    console.log(`something went wrong`, error);
  }
}

async function getBookmarkedPostsFn(postDispatch) {
  try {
    const response = await axios({
      method: "get",
      url: `/api/users/bookmark/`,
      headers: { authorization: localStorage.getItem("token") },
    }).then((response) =>
      postDispatch({
        type: "ADD_TO_BOOKMARKS",
        payload: response.data.bookmarks,
      })
    );
    toast.success("Bookmarked posts successfully fetched");
  } catch (error) {
    console.log(`something went wrong`, error);
  }
}

async function removeBookmarkedPostsFn(postDispatch, _id) {
  try {
    const response = await axios({
      method: "post",
      url: `/api/users/remove-bookmark/${_id}`,
      headers: { authorization: localStorage.getItem("token") },
      data: {},
    }).then((response) =>
      postDispatch({
        type: "ADD_TO_BOOKMARKS",
        payload: response.data.bookmarks,
      })
    );
    toast.success("Post successfully removed from bookmarks");
  } catch (error) {
    console.log(`something went wrong`, error);
  }
}

async function likesPostFn(postDispatch, _id) {
  try {
    const res = await axios({
      method: "post",
      url: `/api/posts/like/${_id}`,
      headers: { authorization: localStorage.getItem("token") },
      data: {},
    }).then((response) => {
      postDispatch({
        type: "LIKESPOST",
        // type: "GET_COMPOSE_POST",
        payload: response.data.posts,
      });
    });
    toast.success("Post successfully liked");
  } catch (error) {
    console.log(`something went wrong`, error);
  }
}

async function dislikesPostFn(postDispatch, _id) {
  try {
    const response = await axios({
      method: "post",
      url: `/api/posts/dislike/${_id}`,
      headers: { authorization: localStorage.getItem("token") },
      data: {},
    }).then((response) =>
      postDispatch({
        type: "LIKESPOST",
        // type: "GET_COMPOSE_POST",
        payload: response.data.posts,
      })
    );
    toast.success("Post successfully disliked");
  } catch (error) {
    console.log(`something went wrong`, error);
  }
}

async function getPostsbyIdFn(commentsDispatch, _id) {
  try {
    const response = await axios({
      method: "get",
      url: `/api/posts/${_id}`,
    }).then((response) =>
      commentsDispatch({
        type: "COMMENTS",
        payload: response.data.post,
      })
    );
    toast.success("Post successfully fetched");
  } catch (error) {
    console.log(`something went wrong`, error);
  }
}

async function getPostByUsernameFn(postDispatch, username) {
  try {
    const response = await axios({
      method: "get",
      url: `/api/posts/user/${username}`,
    }).then((response) =>
      postDispatch({
        type: "GET_POSTS_BY_USERNAME",
        payload: response.data.posts,
      })
    );
    toast.success("Post successfully fetched");
  } catch (error) {
    console.log(`something went wrong`, error);
  }
}

async function updatePostFn(_id, post, postDispatch) {
  try {
    const response = await axios({
      method: "post",
      url: `/api/posts/edit/${_id}`,
      headers: { authorization: localStorage.getItem("token") },
      data: { postData: { ...post } },
    }).then((response) => {
      postDispatch({
        type: "COMPOSE_POST",
        payload: response.data.posts,
      });
    });
    toast.success("Post successfully updated");
  } catch (error) {
    console.log(`something went wrong`, error);
  }
}

export {
  composeNewPostFn,
  getComposedPostFn,
  deletePostFn,
  editPostFn,
  addPostToBookmarkFn,
  getBookmarkedPostsFn,
  likesPostFn,
  removeBookmarkedPostsFn,
  dislikesPostFn,
  getPostsbyIdFn,
  getPostByUsernameFn,
  updatePostFn,
};
