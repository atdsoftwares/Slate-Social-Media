import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Commentsmodel from "../../Components/Comments Module/Commentsmodel";
import { useCommentContext } from "../../Components/Context/CommentsContext";
import { useComposePostContext } from "../../Components/Context/PostContext";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import PostModel from "../../Components/Post Model/PostModel";
// import { getPostsbyIdFn } from "../../Components/Services/Post/Postservices";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { getPostsbyIdFn } from "../../redux/reducers/postsSlice";

function Commentspage() {
  // const { commentsdata, commentsDispatch } = useCommentContext();
  const commentsdata = useSelector((state) => state.comments.commentsdata);
  const getPostsbyId = useSelector((state) => state.posts.getPostsbyId);

  const _id = useParams();

  const newCommentsData = [{ ...getPostsbyId }];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostsbyIdFn(_id._id));
  }, []);

  return (
    <div>
      <Header />
      <Sidebar />
      {newCommentsData.map((newcommentdata) => {
        return (
          <Commentsmodel
            commentsdata={newcommentdata}
            key={newCommentsData._id}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default Commentspage;
