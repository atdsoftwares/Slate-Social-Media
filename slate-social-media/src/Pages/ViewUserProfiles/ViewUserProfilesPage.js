import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Viewuserprofilecard from "../../Components/Cards/Viewuserprofilecard";
import { useComposePostContext } from "../../Components/Context/PostContext";
import { useUserContext } from "../../Components/Context/UserContext";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Viewuserprofile from "../../Components/ProfieView/Viewuserprofile";
import { getPostByUsernameFn } from "../../Components/Services/Post/Postservices";
import { getUserDetailsByIdFn } from "../../Components/Services/User/Userservices";
import Sidebar from "../../Components/Sidebar/Sidebar";

function ViewUserProfilesPage() {
  const { getPostsByUserName, postDispatch } = useComposePostContext();
  console.log(
    "🚀 ~ file: ViewUserProfilesPage.js ~ line 15 ~ ViewUserProfilesPage ~ getPostsByUserName",
    getPostsByUserName
  );
  const { getUsersbyId } = useUserContext();

  const { username } = getUsersbyId;

  useEffect(() => {
    getPostByUsernameFn(postDispatch, username);
  }, [postDispatch, username]);

  return (
    <div>
      <Header />
      <Viewuserprofile />

      {getPostsByUserName.map((newpostdata) => {
        return (
          <Viewuserprofilecard
            key={newpostdata._id}
            newpostdata={newpostdata}
          />
        );
      })}

      <Sidebar />
      <Footer />
    </div>
  );
}

export default ViewUserProfilesPage;
