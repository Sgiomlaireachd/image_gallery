import React from "react";
import "./ImagesList.css";

export default React.memo(
  ({ images, onClick }) => {
    if (!images.length) return <h1>Loading...</h1>;

    const imagesElements = images.map((item) => (
      <div
        className="images__item"
        key={item.id}
        onClick={(e) => onClick(item.id)}
      >
        <img src={item.url} alt="Gallery img" />
      </div>
    ));

    return (
      <div className="images">
        <div className="container">
          <div className="images__inner">{imagesElements}</div>
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => prevProps.images === nextProps.images
);
