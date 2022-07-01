import React from "react";
import AccountSidebar from "../../Components/AccountSidebar/AccountSidebar";
import Posteditor from "../../Components/ComposePost Editor/PostEditor";
import Editpost from "../../Components/editpost/Editpost";
import Emoji from "../../Components/emoji/Emoji";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";

function Homepage() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Posteditor />

      <AccountSidebar />
      <Footer />
    </div>
  );
}

export default Homepage;
