import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Bookmarkedpost from "../../Components/BookMarkedPost/Bookmarkedpost";
import { useComposePostContext } from "../../Components/Context/PostContext";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import PostModel from "../../Components/Post Model/PostModel";
// import { getBookmarkedPostsFn } from "../../Components/Services/Post/Postservices";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { getBookmarkedPostsFn } from "../../redux/reducers/postsSlice";

function Bookmarkpage() {
  // const { addToBookmarks, postDispatch } = useComposePostContext();
  const dispatch = useDispatch();
  const addToBookmarks = useSelector((state) => state.posts.addToBookmarks);

  useEffect(() => {
    dispatch(getBookmarkedPostsFn());
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
