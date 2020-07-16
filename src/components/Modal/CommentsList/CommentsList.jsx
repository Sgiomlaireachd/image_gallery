import React from "react";
import "./CommentsList.css";

export default React.memo(
  ({ comments }) => {
    console.log("HERE:", comments);
    if (!comments) return <p>Loading...</p>;

    const commentsElements = comments.map((item) => (
      <div className="comments__item" key={item.id}>
        <div className="comments__date">
          {new Date(item.date).toDateString()}
        </div>
        <div className="comments__text">{item.text}</div>
      </div>
    ));

    if (!commentsElements.length) return <p>No comments yet.</p>;

    return (
      <div className="comments">
        <div className="comments__inner">{commentsElements}</div>
      </div>
    );
  },
  (prevProps, nextProps) => prevProps.comments === nextProps.comments
);
