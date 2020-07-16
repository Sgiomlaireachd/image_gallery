import React, { useEffect, useState } from "react";
import "./Modal.css";
import Modal from "./Modal";
import api from "../../api/api";

export default ({ currentImageId, onSetCurrentImageId }) => {
  const [imageData, setImageData] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    (async () => {
      if (currentImageId) {
        const imageData = await api.getImageComments(currentImageId);
        console.log("USE_EFFECT:", imageData);
        setImageData(imageData);
      }
    })();
  }, [currentImageId]);

  const onSetImageData = (data) => {
    setImageData(data);
  };

  const onCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const onCommentSend = async (e) => {
    e.preventDefault();
    setNewComment("");
    await api.sendImageComment(currentImageId, newComment);
  };

  if (currentImageId === null) return <></>;
  return (
    <Modal
      imageData={imageData}
      newComment={newComment}
      onSetCurrentImageId={onSetCurrentImageId}
      onSetImageData={onSetImageData}
      onCommentChange={onCommentChange}
      onCommentSend={onCommentSend}
    />
  );
};
