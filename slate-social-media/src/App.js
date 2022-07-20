import { Route, Routes } from "react-router-dom";
import "./App.css";
import Bookmarkpage from "./Pages/Bookmarkpage/Bookmarkpage";
import Commentspage from "./Pages/Commentspage/Commentspage";
import Explorepage from "./Pages/Explorepage/Explorepage";
import Homepage from "./Pages/Homepage/Homepage";
import Loginpage from "./Pages/Loginpage/Loginpage";
import Profielpage from "./Pages/Profilepage/Profielpage";
import Signuppage from "./Pages/Signuppage/Signuppage";
import Welcomepage from "./Pages/Welcomepage/Welcomepage";
import Editpostpage from "./Pages/Editpostpage/Editpostpage";
import Auth from "./Components/Auth/Auth";
import ViewUserProfilesPage from "./Pages/ViewUserProfiles/ViewUserProfilesPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcomepage />} />
        <Route
          path="/explore"
          element={
            <Auth>
              <Explorepage />
            </Auth>
          }
        />
        <Route
          path="/Edit/:_id"
          element={
            <Auth>
              <Editpostpage />
            </Auth>
          }
        />
        <Route
          path="/profile"
          element={
            <Auth>
              <Profielpage />
            </Auth>
          }
        />
        <Route
          path="/ViewProfile/:id"
          element={
            <Auth>
              <ViewUserProfilesPage />
            </Auth>
          }
        />
        <Route
          path="/bookmark"
          element={
            <Auth>
              <Bookmarkpage />
            </Auth>
          }
        />
        <Route
          exact
          path="/home"
          element={
            <Auth>
              <Homepage />
            </Auth>
          }
        />
        <Route
          exact
          path="/comments/:_id"
          element={
            <Auth>
              <Commentspage />
            </Auth>
          }
        />
        <Route exact path="/login" element={<Loginpage />} />
        <Route exact path="/signup" element={<Signuppage />} />
      </Routes>
    </div>
  );
}

export default App;
