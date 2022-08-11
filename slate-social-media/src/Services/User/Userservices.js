import { toast, axios } from "../../Utils/SystemUtils";

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
    toast.success("Users fetched successfully");
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
    toast.success("User details fetched successfully");
  } catch (error) {
    console.log(`something went wrong`, error);
  }
}

export async function getUserDetailsByIdFn(userDispatch, paramsId) {
  try {
    const response = await axios({
      method: "GET",
      url: `/api/users/${paramsId.id}`,
    }).then((response) =>
      userDispatch({
        type: "GET_USERS_BY_ID",
        payload: response.data.user,
      })
    );
    toast.success("User details fetched successfully");
  } catch (error) {
    console.log(`something went wrong`, error);
  }
}

export async function submitEditedUserProfile(userDispatch, userData) {
  try {
    const response = await axios({
      method: "POST",
      url: `/api/users/edit`,
      data: { userData },
    }).then((response) =>
      userDispatch({
        type: "GET_USER_DETAILS",
        payload: response.data.user,
      })
    );
    toast.success("User details updated successfully");
  } catch (error) {
    console.log(`something went wrong`, error);
  }
}

export { getUsersFn, getUserDetailsFn };
