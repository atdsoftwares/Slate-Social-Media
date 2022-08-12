import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserDetailsFn,
  getUsersFn,
  submitEditedUserProfile,
} from "../../redux/reducers/usersSlice";

function EditUserProfile({ toggleModal }) {
  const getUserDetails = useSelector((state) => state.users.getUserDetails);

  const loginData = useSelector((state) => state.auth.loginData);
  const _id = loginData._id;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserDetailsFn(_id));
  }, []);

  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");
  const [bio, setBio] = useState("");
  const [link, setLink] = useState();

  useEffect(() => {
    setAvatar(localStorage.getItem("avatar"));
    setFullName(localStorage.getItem("fullName"));
    setUsername(localStorage.getItem("username"));
    setBio(localStorage.getItem("bio"));
    setLink(localStorage.getItem("link"));
  }, []);

  function handleImage(e) {
    console.log(`image handles`);
    setAvatar(URL.createObjectURL(e.target.files[0]));
  }
  const data = {
    fullName: fullName,
    avatar: avatar,
    bio: bio,
    link: link,
  };
  console.log(
    "🚀 ~ file: EditUserProfile.js ~ line 39 ~ EditUserProfile ~ data",
    data
  );
  function submitUpdatedUserDetails(e) {
    e.preventDefault();
    dispatch(submitEditedUserProfile(data));
    toggleModal();
  }

  return (
    <div>
      <div>
        <div class="block p-6 rounded-lg shadow-lg bg-gray-600 max-w-md">
          <div class="flex justify-center items-center">
            <span>
              <img
                src={avatar && avatar}
                alt="user"
                class="rounded-full w-24 p-2"
              />
            </span>
          </div>

          <form onSubmit={submitUpdatedUserDetails}>
            <div class="grid grid-cols-2 gap-4">
              <div class="form-group mb-6">
                <input
                  type="text"
                  required
                  value={fullName && fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  class="form-control block  w-full  px-3  py-1.5  text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded  transition  ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Update Name"
                />
              </div>
              <div class="form-group mb-6">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImage}
                  class="form-control block  w-full  px-3  py-1.5  text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded  transition  ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Upload Avatar"
                />
              </div>
            </div>

            <div class="form-group mb-6">
              <input
                type="text"
                onChange={(e) => setLink(e.target.value)}
                value={link && link}
                required
                class="form-control block  w-full  px-3  py-1.5  text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded  transition  ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Update Link"
              />
            </div>

            <div class="form-group mb-6">
              <input
                type="text"
                onChange={(e) => setBio(e.target.value)}
                value={bio && bio}
                required
                class="form-control block  w-full  px-3  py-1.5  text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded  transition  ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Update Bio"
              />
            </div>

            <input
              type="submit"
              required
              value="Update"
              class=" w-full px-6 py-2.5 bg-blue-600 text-white cursor-pointer font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditUserProfile;
