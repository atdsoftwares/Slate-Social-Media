import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Commentsmodel from "../../Components/Comments Module/Commentsmodel";
import { useCommentContext } from "../../Components/Context/CommentsContext";
import { useComposePostContext } from "../../Components/Context/PostContext";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import PostModel from "../../Components/Post Model/PostModel";
import { getPostsbyIdFn } from "../../Components/Services/Post/Postservices";
import Sidebar from "../../Components/Sidebar/Sidebar";

function Commentspage() {
  const { commentsdata, commentsDispatch } = useCommentContext();

  const _id = useParams();

  const newCommentsData = [{ ...commentsdata }];

  useEffect(() => {
    getPostsbyIdFn(commentsDispatch, _id._id);
  }, [commentsDispatch, _id]);

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
