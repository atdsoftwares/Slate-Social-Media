import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import PostModel from "../../Components/Post Model/PostModel";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Explorepage.css";
function Explorepage() {
  return (
    <div>
      <Header />
      <Sidebar />
      <PostModel />
      <PostModel />
      <PostModel />
      <PostModel />
      <PostModel />
      <Footer />
    </div>
  );
}

export default Explorepage;
