import React, { useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Profileview from "../../Components/Profileview/Profileview";
import Sidebar from "../../Components/Sidebar/Sidebar";
import PostModel from "../../Components/Post Model/PostModel";
import { useCommentContext } from "../../Components/Context/CommentsContext";
import { useUserContext } from "../../Components/Context/UserContext";
// import { getPostByUsernameFn } from "../../Components/Services/Post/Postservices";
import { useComposePostContext } from "../../Components/Context/PostContext";
import Profielpagepostcard from "../../Components/Cards/Profilepagepostcard";
import { useDispatch, useSelector } from "react-redux";
import { getPostByUserNameFn } from "../../redux/reducers/postsSlice";
function Profielpage() {
  // const { getUserDetails } = useUserContext();
  const getUserDetails = useSelector((state) => state.users.getUserDetails);
  const { username } = getUserDetails;

  // const { getPostsByUserName, postDispatch } = useComposePostContext();
  const getPostsByUserName = useSelector(
    (state) => state.posts.getPostsByUserName
  );
  console.log(
    "🚀 ~ file: Profielpage.js ~ line 23 ~ Profielpage ~ getPostsByUserName",
    getPostsByUserName
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostByUserNameFn(username));
  }, [username]);
  return (
    <div>
      <Header />
      <Sidebar />
      <Profileview />

      {getPostsByUserName.map((newpostdata) => {
        return (
          <Profielpagepostcard
            key={newpostdata._id}
            newpostdata={newpostdata}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default Profielpage;
