import React from "react";
import "./Modal.css";

export default ({ imageData, onSetImageData, onSetCurrentImageId }) => {
  return (
    <div className="modal">
      <div className="modal__bg"></div>
      <div className="modal__inner">
        <h4>Modal</h4>
        <img src={imageData.url} alt="View comments" />

        <button
          onClick={(e) => {
            onSetCurrentImageId(null);
            onSetImageData([]);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};
