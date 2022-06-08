import { Route, Routes } from "react-router-dom";
import "./App.css";
import Bookmarkpage from "./Pages/Bookmarkpage/Bookmarkpage";
import Commentspage from "./Pages/Commentspage/Commentspage";
import Explorepage from "./Pages/Explorepage/Explorepage";
import Homepage from "./Pages/Homepage/Homepage";

import Profielpage from "./Pages/Profilepage/Profielpage";
import Welcomepage from "./Pages/Welcomepage/Welcomepage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcomepage />} />
        <Route path="/explore" element={<Explorepage />} />
        <Route path="/profile" element={<Profielpage />} />
        <Route path="/bookmark" element={<Bookmarkpage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/comments" element={<Commentspage />} />
      </Routes>
    </div>
  );
}

export default App;
