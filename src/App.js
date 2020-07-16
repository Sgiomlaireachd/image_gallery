import React, { useState, useEffect } from "react";
import "./App.css";
import api from "./api/api";
import ImagesList from "./components/ImagesList/ImagesList";
import ModalContainer from "./components/Modal/ModalContainer";

const App = React.memo(() => {
  const [images, setImages] = useState([]);
  const [currentImageId, setCurrentImageId] = useState(null);

  useEffect(() => {
    (async () => {
      const images = await api.getImages();
      setImages(images);
    })();
  }, []);

  const onClick = (imageId) => {
    setCurrentImageId(imageId);
  };

  const onSetCurrentImageId = (imageId) => {
    setCurrentImageId(imageId);
  };

  return (
    <div className="App">
      <ImagesList images={images} onClick={onClick} />
      <ModalContainer
        currentImageId={currentImageId}
        onSetCurrentImageId={onSetCurrentImageId}
      />
    </div>
  );
});

export default App;
