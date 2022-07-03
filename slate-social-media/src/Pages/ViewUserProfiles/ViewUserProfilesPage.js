import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Viewuserprofilecard from "../../Components/Cards/Viewuserprofilecard";
import { useComposePostContext } from "../../Components/Context/PostContext";
import { useUserContext } from "../../Components/Context/UserContext";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Viewuserprofile from "../../Components/ProfieView/Viewuserprofile";
// import { getPostByUsernameFn } from "../../Components/Services/Post/Postservices";
// import { getUserDetailsByIdFn } from "../../Components/Services/User/Userservices";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { getPostByUserNameFn } from "../../redux/reducers/postsSlice";

function ViewUserProfilesPage() {
  const dispatch = useDispatch();
  const getPostsByUserName = useSelector(
    (state) => state.posts.getPostsByUserName
  );
  const getUsersbyId = useSelector((state) => state.users.getUsersbyId);
  // const { getPostsByUserName, postDispatch } = useComposePostContext();

  // const { getUsersbyId } = useUserContext();

  const { username } = getUsersbyId;

  useEffect(() => {
    dispatch(getPostByUserNameFn(username));
  }, [username]);

  return (
    <div>
      <Header />
      <Viewuserprofile />

      {getPostsByUserName.map((newpostdata) => {
        return (
          <Viewuserprofilecard
            key={newpostdata._id}
            newpostdata={newpostdata}
          />
        );
      })}

      <Sidebar />
      <Footer />
    </div>
  );
}

export default ViewUserProfilesPage;
