import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Profileview from "../../Components/Profileview/Profileview";
import Sidebar from "../../Components/Sidebar/Sidebar";
import PostModel from "../../Components/Post Model/PostModel";
function Profielpage() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Profileview />
      <PostModel />
      <PostModel />
      <PostModel />
      <PostModel />
      <Footer />
    </div>
  );
}

export default Profielpage;
