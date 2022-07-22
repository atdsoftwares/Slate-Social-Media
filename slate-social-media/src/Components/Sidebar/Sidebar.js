import { React, Link } from "../../Utils/SystemUtils";

import "./Sidebar.css";
function Sidebar() {
  return (
    <div>
      <aside className="aside">
        <div className="home">
          <Link to="/home">
            <span className="material-icons sidebarmi" title="Home">
              home
            </span>
          </Link>
          Home
        </div>
        <div className="playlists">
          <Link to="/explore">
            <span className="material-icons sidebarmi" title="Playlists">
              explore
            </span>{" "}
          </Link>
          Explore
        </div>
        <div className="watchlater">
          <Link to="/bookmark">
            <span className="material-icons sidebarmi" title="History">
              bookmark
            </span>{" "}
          </Link>
          Bookmark
        </div>
        <div className="history">
          <Link to="/profile">
            <span class="material-icons navigationmi"> account_circle</span>
          </Link>
          Profile
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
