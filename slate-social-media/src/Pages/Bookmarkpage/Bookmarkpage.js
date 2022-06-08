import React from "react";
import Bookmarkedpost from "../../Components/BookMarkedPost/Bookmarkedpost";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";

function Bookmarkpage() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Bookmarkedpost />
      <Footer />
    </div>
  );
}

export default Bookmarkpage;
