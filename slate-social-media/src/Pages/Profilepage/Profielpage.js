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
function Profielpage() {
  const { commentsDispatch } = useCommentContext();
  const { getUserDetails } = useUserContext();
  const { username } = getUserDetails;

  const { getPostsByUserName, postDispatch } = useComposePostContext();
  console.log(
    "🚀 ~ file: Profielpage.js ~ line 17 ~ Profielpage ~ getPostsByUserName",
    getPostsByUserName
  );

  useEffect(() => {
    console.log(`I am being called `);
    getPostByUsernameFn(postDispatch, username);
  }, [postDispatch, username]);
  return (
    <div>
      <Header />
      <Sidebar />
      <Profileview />

      {getPostsByUserName.map((postdata) => {
        return <PostModel key={postdata._id} postdata={postdata} />;
      })}

      <Footer />
    </div>
  );
}

export default Profielpage;
