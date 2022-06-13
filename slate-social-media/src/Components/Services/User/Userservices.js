import axios from "axios";

async function getUsersFn(userDispatch) {
  try {
    const response = await axios({
      method: "GET",
      url: `/api/users/`,
    }).then((response) =>
      userDispatch({
        type: "GET_USERS",
        payload: response.data.users,
      })
    );
  } catch (error) {
    console.log(`something went wrong`, error);
  }
}

async function getUserDetailsFn(userDispatch, _id) {
  try {
    const response = await axios({
      method: "GET",
      url: `/api/users/${_id}`,
    }).then((response) =>
      userDispatch({
        type: "GET_USER_DETAILS",
        payload: response.data.user,
      })
    );
  } catch (error) {
    console.log(`something went wrong`, error);
  }
}

export { getUsersFn, getUserDetailsFn };
