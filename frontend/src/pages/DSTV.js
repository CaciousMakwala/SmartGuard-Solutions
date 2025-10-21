import React, { useState, useEffect, useCallback } from 'react';
import '../css/DSTV.css';
import '../css/ImageContainer.css';

const images = [
  '480059565_122135321114533818_7769895149981014503_n.jpg',
  'IMG-20250626-WA0018.jpg',
  'IMG-20250626-WA0019.jpg',
  'IMG-20250626-WA0020.jpg',
  'IMG-20250626-WA0021.jpg',
  'IMG-20250626-WA0023.jpg',
  'IMG-20250626-WA0024.jpg',
  'IMG-20250626-WA0025.jpg',
  'IMG-20250626-WA0026.jpg',
  'IMG-20250626-WA0027.jpg',
  'IMG-20250626-WA0029.jpg',
  'IMG-20250626-WA0030.jpg',
  'IMG-20250626-WA0031.jpg',
  'IMG-20250626-WA0032.jpg',
  'IMG-20250626-WA0033.jpg',
  'IMG-20250626-WA0034.jpg',
  'IMG-20250626-WA0061.jpg',
];

const DSTV = () => {
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
    <div className="dstv-page">
      <h1>DSTV</h1>
      <p>Reliable DSTV installation and maintenance services.</p>
      <div className="dstv-images">
        {images.map((filename, index) => (
          <div key={index} className="image-container">
            <img
              src={process.env.PUBLIC_URL + '/assets/images/dstv/' + filename}
              alt={`DSTV ${index + 1}`}
              className="dstv-image"
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
              src={process.env.PUBLIC_URL + '/assets/images/dstv/' + images[zoomedIndex]}
              alt="Zoomed DSTV"
              className="modal-image"
            />
            <button className="modal-next" onClick={showNext}>{">"}</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DSTV;
