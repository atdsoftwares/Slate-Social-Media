// import "./Profilepagepostcard.css";
function Profielpagepostcard({ newpostdata }) {
  const { avatar, username, content, fullName, createdAt, image, video, pdf } =
    newpostdata;
  return (
    <div className="flex flex-col justify-center items-center w-full mt-2 ">
      <div
        className="h-auto w-96 flex flex-col justify-start items-center
     md:flex-row md:max-w-xl rounded-lg bg-gray-600 shadow-lg 
    "
      >
        <div class="h-auto">
          <div class="flex p-1">
            <img src={avatar} alt="avatar" className="rounded-full h-12 w-12" />

            <div class="flex flex-col p-1">
              <span className="text-sm">{fullName}</span>
              <span className="text-sm">{username} </span>
              <span className="text-sm font-mono ">{createdAt}</span>
            </div>
          </div>

          <div
            class="flex p-2
        flex-col justify-center items-start"
          >
            <p>{content}</p>
          </div>
          <hr className="w-96" />
          <div class="content-container">
            <div class="content-data">
              {image ? (
                <img
                  class="w-full p-2 h-auto"
                  src={image}
                  alt="uploaded-by-user"
                />
              ) : (
                <div>{null} </div>
              )}
              {video ? (
                <video class="w-full p-2 h-auto" src={video} controls />
              ) : (
                <div>{null} </div>
              )}

              {pdf ? (
                <embed class="w-full p-2 h-36" src={pdf} />
              ) : (
                <div> {null}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profielpagepostcard;
