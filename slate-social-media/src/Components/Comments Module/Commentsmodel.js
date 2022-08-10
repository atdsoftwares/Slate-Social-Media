import {
  useEffect,
  useState,
  useDispatch,
  useSelector,
} from "../../Utils/SystemUtils";

import {
  downvoteCommentFn,
  postCommentFn,
  upvoteCommentFn,
} from "../../redux/reducers/commentsSlice";
import { getPostsbyIdFn } from "../../redux/reducers/postsSlice";

// import "./Commentsmodel.css";
function Commentsmodel({ commentsdata }) {
  const composeComment = useSelector((state) => state.comments.composeComment);
  const getUserDetails = useSelector((state) => state.users.getUserDetails);
  const [commentBoxInput, setCommentBoxInput] = useState();

  const {
    _id,
    avatar,
    fullName,
    content,
    image,
    video,
    username,
    comments,
    pdf,
  } = commentsdata;
  console.log(
    "🚀 ~ file: Commentsmodel.js ~ line 32 ~ Commentsmodel ~ comments",
    comments
  );

  const comment = commentBoxInput;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostsbyIdFn(_id));
  }, [composeComment]);

  function submitComment(e) {
    e.preventDefault();
    dispatch(postCommentFn({ _id, comment }));
    setCommentBoxInput("");
  }

  return (
    // <div className="comments-container">
    //   <div class="f-card">
    //     <div class="header">
    //       <div class="options">
    //         <i class="fa fa-chevron-down"></i>
    //       </div>
    //       <img class="co-logo" src={avatar} alt="user-avatar" />
    //       <div class="co-name">
    //         <span> {fullName}</span>
    //         <div>{username}</div>
    //       </div>
    //       <div class="time">
    //         <span href="#">Posted at : {Date()}</span>
    //       </div>
    //     </div>
    //     <div
    //       class="content"
    //       dangerouslySetInnerHTML={{ __html: content }}
    //     ></div>

    //     <div class="reference">
    //       <div class="reference-content">
    //         {image && (
    //           <img class="reference-thumb" src={image} alt="uploaded-by-user" />
    //         )}
    //         {video && <video class="reference-video" src={video} controls />}
    //         {pdf && <embed class="reference-pdf" src={pdf} />}
    //       </div>
    //     </div>
    //     <div class="social"></div>
    //     <div className="comment-box-data">
    //       <img
    //         className="avatar_image"
    //         src={getUserDetails.avatar}
    //         alt="user-avatar"
    //       ></img>
    //       <form onSubmit={submitComment}>
    //         <div className="form-container">
    //           <input
    //             type="text"
    //             value={commentBoxInput}
    //             required
    //             className="input-comment-text"
    //             placeholder="Write a comment..."
    //             onChange={(e) => setCommentBoxInput(e.target.value)}
    //           />

    //           <input type="submit" className="btn-submit" />
    //         </div>
    //       </form>
    //     </div>

    //     {comments?.map((c) => {
    //       const commentId = c._id;
    //       const postId = _id;

    //       return (
    //         <div className="comment-box-data1">
    //           <div className="username-and-avatar">
    //             <img
    //               className="avatar_image"
    //               src={c.avatar}
    //               alt="user-avatar"
    //             />
    //             @{c.username}
    //             <hr />
    //           </div>
    //           <p className="text-content">{c?.text}</p>

    //           <span
    //             class="material-icons commentsmi"
    //             onClick={() => dispatch(upvoteCommentFn({ postId, commentId }))}
    //           >
    //             thumb_up_off_alt
    //           </span>
    //           {c.votes.upvotedBy.length}

    //           <span
    //             class="material-icons commentsmi"
    //             onClick={() =>
    //               dispatch(downvoteCommentFn({ postId, commentId }))
    //             }
    //           >
    //             thumb_down_off_alt
    //           </span>
    //           {c.votes.downvotedBy.length}
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
    <div className="flex flex-col justify-center items-center w-full mt-4 overflow-auto">
      <div
        className="h-auto w-96 flex flex-col mt-2 justify-start items-center
     md:flex-row md:max-w-xl rounded-lg bg-gray-600 shadow-lg 
    "
      >
        <div class="h-auto">
          <div class="flex p-1">
            <img src={avatar} alt="avatar" className="rounded-full h-12 w-12" />

            <div class="flex flex-col p-1">
              <span className="text-sm">{fullName}</span>
              <span className="text-sm">{username} </span>
            </div>
          </div>

          <div
            class="flex p-2
        flex-col justify-center items-start"
          >
            <p className="text-sm">{content}</p>
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
          <div className="flex justify-around items-center">
            <form className="flex p-1" onSubmit={submitComment}>
              <input
                type="text"
                class=" form-control 
                block w-60 px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                placeholder="add comments here ..."
                onChange={(e) => setCommentBoxInput(e.target.value)}
              />

              <input
                type="submit"
                value="comment"
                class="text-xs cursor-pointer inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded-full"
              />
            </form>
          </div>
          <hr className="w-96" />
          {comments?.map((c) => {
            const commentId = c._id;
            const postId = _id;

            return (
              <div>
                <div className="flex justify-between items-center">
                  <div className="flex justify-start items-center w-36  m-1">
                    <img src={c.avatar} class="rounded-full w-8" alt="Avatar" />
                    <p className="text-sm ml-2">{c.text && c.text}</p>
                  </div>
                  <div className=" flex justify-end items-end mr-2 cursor-pointer">
                    <span
                      class="material-icons text-sm"
                      onClick={() =>
                        dispatch(upvoteCommentFn({ postId, commentId }))
                      }
                    >
                      thumb_up_off_alt
                    </span>
                    {c.votes.upvotedBy.length}

                    <span
                      class="material-icons text-sm"
                      onClick={() =>
                        dispatch(downvoteCommentFn({ postId, commentId }))
                      }
                    >
                      thumb_down_off_alt
                    </span>
                    {c.votes.downvotedBy.length}
                  </div>
                </div>
                <hr className="w-96" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Commentsmodel;
