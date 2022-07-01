import React from "react";
import Editpost from "../../Components/editpost/Editpost";
import Emoji from "../../Components/emoji/Emoji";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import Sidebar from "../../Components/Sidebar/Sidebar";

function Welcomepage() {
  return (
    <div>
      <Header />
      <Hero />
      {/* <Editpost /> */}
      <Footer />
    </div>
  );
}

export default Welcomepage;
