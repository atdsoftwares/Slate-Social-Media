import { Route, Routes } from "./Utils/SystemUtils";
import { Auth } from "./Components/IndexAllComponents";
import {
  Bookmarkpage,
  Commentspage,
  Editpostpage,
  Explorepage,
  Homepage,
  Loginpage,
  Profielpage,
  Signuppage,
  ViewUserProfilesPage,
  Welcomepage,
} from "./Pages/IndexAllPages";

function Page() {
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

export default Page;
