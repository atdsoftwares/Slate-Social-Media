import { Route, Routes } from "react-router-dom";
import "./App.css";
import Bookmarkpage from "./Pages/Bookmarkpage/Bookmarkpage";
import Commentspage from "./Pages/Commentspage/Commentspage";
import Explorepage from "./Pages/Explorepage/Explorepage";
import Homepage from "./Pages/Homepage/Homepage";
import Loginpage from "./Pages/Loginpage/Loginpage";
import Mockman from "mockman-js";
import Profielpage from "./Pages/Profilepage/Profielpage";
import Signuppage from "./Pages/Signuppage/Signuppage";
import Welcomepage from "./Pages/Welcomepage/Welcomepage";
import Editpostpage from "./Pages/Editpostpage/Editpostpage";

import ViewUserProfilesPage from "./Pages/ViewUserProfiles/ViewUserProfilesPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcomepage />} />
        <Route path="/explore" element={<Explorepage />} />
        <Route path="/Edit/:_id" element={<Editpostpage />} />
        <Route path="/profile" element={<Profielpage />} />
        <Route path="/ViewProfile/:id" element={<ViewUserProfilesPage />} />
        <Route path="/bookmark" element={<Bookmarkpage />} />
        <Route exact path="/home" element={<Homepage />} />
        <Route exact path="/comments/:_id" element={<Commentspage />} />
        <Route exact path="/login" element={<Loginpage />} />
        <Route exact path="/signup" element={<Signuppage />} />
        <Route exact path="/mockbee" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
