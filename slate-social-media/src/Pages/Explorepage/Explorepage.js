import React, { useEffect } from "react";
import { useComposePostContext } from "../../Components/Context/PostContext";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import PostModel from "../../Components/Post Model/PostModel";
import { getComposedPostFn } from "../../Components/Services/Post/Postservices";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Explorepage.css";
function Explorepage() {
  const { getComposePost, postDispatch } = useComposePostContext();

  useEffect(() => {
    getComposedPostFn(postDispatch);
  }, []);

  return (
    <div>
      <Header />
      <Sidebar />
      {getComposePost.map((postdata) => {
        return <PostModel postdata={postdata} key={postdata._id} />;
      })}

      <Footer />
    </div>
  );
}

export default Explorepage;
