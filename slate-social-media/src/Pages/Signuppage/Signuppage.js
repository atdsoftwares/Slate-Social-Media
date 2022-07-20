import React from "react";
import Signup from "../../Components/AuthForms/Signup";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Postcard from "../../Components/PostCard-Exp/Postcard";

function Signuppage() {
  return (
    <div>
      <Header />
      <Signup />
      {/* <Postcard /> */}
      <Footer />
    </div>
  );
}

export default Signuppage;
