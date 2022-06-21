import axios from "axios";

export async function followUserFn(userDispatch, userId) {
  try {
    const response = await axios({
      method: "post",
      url: `/api/users/follow/${userId}`,
      headers: { authorization: localStorage.getItem("token") },
      data: {},
    }).then((response) =>
      userDispatch({
        type: "GET_COMPOSE_POST",
        payload: response.data.user,
      })
    );
  } catch (error) {
    console.log(`something went wrong`, error);
  }
}

export async function unFollowUserFn(userDispatch, userId) {
  try {
    const response = await axios({
      method: "post",
      url: `/api/users/unfollow/${userId}`,
      headers: { authorization: localStorage.getItem("token") },
      data: {},
    }).then((response) =>
      userDispatch({
        type: "GET_COMPOSE_POST",
        payload: response.data.user,
      })
    );
    console.log(response);
  } catch (error) {
    console.log(`something went wrong`, error);
  }
}
