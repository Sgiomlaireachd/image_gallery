import React, { useEffect, useState } from "react";
import "./Modal.css";
import Modal from "./Modal";
import api from "../../api/api";

export default ({ currentImageId, onSetCurrentImageId }) => {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    (async () => {
      if (currentImageId) {
        const imageData = await api.getImageComments(currentImageId);
        setImageData(imageData);
      }
    })();
  }, [currentImageId]);

  const onSetImageData = (data) => {
    setImageData(data);
  };

  if (currentImageId === null) return <></>;
  return (
    <Modal
      imageData={imageData}
      onSetImageData={onSetImageData}
      onSetCurrentImageId={onSetCurrentImageId}
    />
  );
};
