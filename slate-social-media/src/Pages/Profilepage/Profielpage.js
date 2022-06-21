import React, { useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Profileview from "../../Components/Profileview/Profileview";
import Sidebar from "../../Components/Sidebar/Sidebar";
import PostModel from "../../Components/Post Model/PostModel";
import { useCommentContext } from "../../Components/Context/CommentsContext";
import { useUserContext } from "../../Components/Context/UserContext";
import { getPostByUsernameFn } from "../../Components/Services/Post/Postservices";
import { useComposePostContext } from "../../Components/Context/PostContext";
import Profielpagepostcard from "../../Components/Cards/Profilepagepostcard";
function Profielpage() {
  const { getUserDetails } = useUserContext();
  const { username } = getUserDetails;

  const { getPostsByUserName, postDispatch } = useComposePostContext();

  useEffect(() => {
    getPostByUsernameFn(postDispatch, username);
  }, [postDispatch, username]);
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
