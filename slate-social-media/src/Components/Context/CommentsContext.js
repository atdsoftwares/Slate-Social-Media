import React, { createContext, useContext, useReducer } from "react";

const postCommentsContext = createContext();
export const useCommentContext = () => useContext(postCommentsContext);

function CommentsContext({ children }) {
  function commentReducer(state, action) {
    switch (action.type) {
      case "COMPOSE_COMMENT":
        return {
          ...state,
          composeComment: action.payload,
        };
      case "COMMENTS":
        return {
          ...state,
          commentsdata: action.payload,
        };
      case "COMMENT_BOX_INPUT":
        return { ...state, commentBoxInput: action.payload };
      default:
        return state;
    }
  }

  const [state, commentsDispatch] = useReducer(commentReducer, {
    composeComment: [],
    commentsdata: [],
    commentBoxInput: "",
  });
  const { composeComment, commentsdata, commentBoxInput } = state;
  return (
    <div>
      <postCommentsContext.Provider
        value={{
          commentsDispatch,
          composeComment,
          commentsdata,
          commentBoxInput,
        }}
      >
        {children}
      </postCommentsContext.Provider>
    </div>
  );
}

export default CommentsContext;
