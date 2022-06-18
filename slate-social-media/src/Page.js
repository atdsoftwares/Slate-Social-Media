import React from "react";
import App from "./App";
import CommentsContext from "./Components/Context/CommentsContext";
import LoginSignupContext from "./Components/Context/LoginSignupContext";
import PostContext from "./Components/Context/PostContext";
import UserContext from "./Components/Context/UserContext";

function Page() {
  return (
    <div>
      <LoginSignupContext>
        <UserContext>
          <PostContext>
            <CommentsContext>
              <App />
            </CommentsContext>
          </PostContext>
        </UserContext>
      </LoginSignupContext>
    </div>
  );
}

export default Page;
