import React from "react";
import EditPostForm from "../../Components/EditPostForm/EditPostForm";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";

function Editpostpage() {
  return (
    <div>
      <Header />
      <Sidebar />
      <EditPostForm />
      <Footer />
    </div>
  );
}

export default Editpostpage;
