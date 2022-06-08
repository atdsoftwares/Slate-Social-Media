import React from "react";
import Commentsmodel from "../../Components/Comments Module/Commentsmodel";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";

function Commentspage() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Commentsmodel />
      <Footer />
    </div>
  );
}

export default Commentspage;
