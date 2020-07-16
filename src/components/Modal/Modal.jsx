import React from "react";
import "./Modal.css";
import CommentsList from "./CommentsList/CommentsList";
import CommentsForm from "./CommentsForm/CommentsForm";

export default ({
  imageData,
  onSetImageData,
  onSetCurrentImageId,
  onCommentChange,
  newComment,
  onCommentSend,
}) => {
  return (
    <div className="modal">
      <div className="modal__bg"></div>
      <div className="modal__wrapper">
        <div className="modal__inner">
          <div className="modal__left">
            <img
              src={
                imageData.url ? imageData.url : "https://placehold.it/600x400"
              }
              alt="View comments"
            />
            <CommentsForm
              onCommentChange={onCommentChange}
              newComment={newComment}
              onCommentSend={onCommentSend}
            />
          </div>
          <div className="modal__right">
            <CommentsList comments={imageData.comments} />
            <button
              className="modal__close"
              onClick={(e) => {
                onSetCurrentImageId(null);
                onSetImageData([]);
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
