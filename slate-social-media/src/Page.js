import React from "react";
import App from "./App";
import UserContext from "./Components/Context/UserContext";

function Page() {
  return (
    <div>
      <UserContext>
        <App />
      </UserContext>
    </div>
  );
}

export default Page;
