import React from "react";
import App from "./App";
import LoginSignupContext from "./Components/Context/LoginSignupContext";
import PostContext from "./Components/Context/PostContext";
import UserContext from "./Components/Context/UserContext";

function Page() {
  return (
    <div>
      <LoginSignupContext>
        <UserContext>
          <PostContext>
            <App />
          </PostContext>
        </UserContext>
      </LoginSignupContext>
    </div>
  );
}

export default Page;
