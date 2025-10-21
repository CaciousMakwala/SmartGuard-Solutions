import React, { useState, useEffect, useCallback } from 'react';
import '../css/WI-FI.css';
import '../css/ImageContainer.css';

const images = [
  'efgh.jpg',
  'ert.jpg',
  'IMG-20250630-WA0027.jpg',
  'IMG-20250630-WA0028.jpg',
  'IMG-20250630-WA0029.jpg',
  'IMG-20250630-WA0030.jpg',
  'IMG-20250630-WA0031.jpg',
  'IMG-20250630-WA0034.jpg',
  'IMG-20250630-WA0035.jpg',
  'lkkp.jpg',
];

const WI_FI = () => {
  const [zoomedIndex, setZoomedIndex] = useState(null);

  const openModal = (index) => {
    setZoomedIndex(index);
  };

  const closeModal = () => {
    setZoomedIndex(null);
  };

  const showNext = () => {
    setZoomedIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPrev = () => {
    setZoomedIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleKeyDown = useCallback((e) => {
    if (zoomedIndex !== null) {
      if (e.key === 'ArrowRight') {
        showNext();
      } else if (e.key === 'ArrowLeft') {
        showPrev();
      } else if (e.key === 'Escape') {
        closeModal();
      }
    }
  }, [zoomedIndex]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="wi-fi-page">
      <h1>Wifi extender</h1>
      <p>Extend your wifi coverage for seamless connectivity.</p>
      <div className="wi-fi-images">
        {images.map((filename, index) => (
          <div key={index} className="image-container">
            <img
              src={process.env.PUBLIC_URL + '/assets/images/WI-FI Extender/' + filename}
              alt={`Wi-Fi Extender ${index + 1}`}
              className="wi-fi-image"
              onClick={() => openModal(index)}
            />
          </div>
        ))}
      </div>

      {zoomedIndex !== null && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <button className="modal-prev" onClick={showPrev}>{"<"}</button>
            <img
              src={process.env.PUBLIC_URL + '/assets/images/WI-FI Extender/' + images[zoomedIndex]}
              alt="Zoomed Wi-Fi Extender"
              className="modal-image"
            />
            <button className="modal-next" onClick={showNext}>{">"}</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WI_FI;
