import React from "react";
import "./CommentForm.css";

export default ({ newComment, onCommentChange, onCommentSend }) => {
  return (
    <form className="comments-form" onSubmit={onCommentSend}>
      <input
        className="comments-form__input"
        type="text"
        onChange={onCommentChange}
        placeholder="Comment"
        value={newComment}
      />
      <button type="submit" className="comments-form__btn">
        Comment
      </button>
    </form>
  );
};
