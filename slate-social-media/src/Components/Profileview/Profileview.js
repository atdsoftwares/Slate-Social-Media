import React from "react";
import "./Profileview.css";
function Profileview() {
  return (
    <div className="composed-post">
      <div className="post-model1">
        <img
          src="https://lucent-media.netlify.app/static/media/bg.493cd779825f711be2bf.jpeg"
          alt="bgposter"
          className="bg-poster-img"
        />
        <img
          src="https://lucent-media.netlify.app/static/media/mock.669f89742966b5eddb17.jpg"
          alt="avatar"
          className="avatar-profile-img"
        />
        <div className="btn-text-profile">
          <h3 className="profile-user-name"> Jaswant Pandey</h3>
          <sub> @iprankurpandey</sub>
          <button className="btn btn-warning-outline bnt-follow">
            Follow
            <span class="material-icons profilemi">person_add</span>
          </button>
        </div>
        <div className="profile-counter">
          <div className="profiler-followers"> follower : 10</div>
          <div className="profiler-following"> following : 10</div>
          <div className="profiler-post"> posts : 10</div>
        </div>
      </div>
    </div>
  );
}

export default Profileview;
