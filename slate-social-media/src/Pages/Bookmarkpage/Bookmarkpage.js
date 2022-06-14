import React, { useEffect } from "react";
import Bookmarkedpost from "../../Components/BookMarkedPost/Bookmarkedpost";
import { useComposePostContext } from "../../Components/Context/PostContext";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import PostModel from "../../Components/Post Model/PostModel";
import { getBookmarkedPostsFn } from "../../Components/Services/Post/Postservices";
import Sidebar from "../../Components/Sidebar/Sidebar";

function Bookmarkpage() {
  const { addToBookmarks, postDispatch } = useComposePostContext();

  useEffect(() => {
    getBookmarkedPostsFn(postDispatch);
  }, []);

  return (
    <div>
      <Header />
      <Sidebar />
      {addToBookmarks.map((postdata) => {
        return <PostModel postdata={postdata} key={postdata._id} />;
      })}

      <Footer />
    </div>
  );
}

export default Bookmarkpage;
