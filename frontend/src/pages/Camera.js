import React, { useState, useEffect, useCallback } from 'react';
import '../css/Camera.css';
import '../css/ImageContainer.css';

const images = [
  'IMG-20250626-WA0029.jpg',
  'IMG-20250626-WA0035.jpg',
  'IMG-20250626-WA0036.jpg',
  'IMG-20250626-WA0037.jpg',
  'IMG-20250626-WA0038.jpg',
  'IMG-20250626-WA0039.jpg',
  'IMG-20250626-WA0042.jpg',
  'IMG-20250626-WA0043.jpg',
  'IMG-20250626-WA0044.jpg',
  'IMG-20250626-WA0045.jpg',
  'IMG-20250626-WA0046.jpg',
  'IMG-20250626-WA0047.jpg',
  'IMG-20250626-WA0048.jpg',
  'IMG-20250626-WA0049.jpg',
  'IMG-20250626-WA0051.jpg',
  'IMG-20250626-WA0052.jpg',
  'IMG-20250626-WA0053.jpg',
  'IMG-20250626-WA0054.jpg',
  'IMG-20250630-WA0005.jpg',
  'IMG-20250630-WA0006.jpg',
  'IMG-20250630-WA0007.jpg',
  'IMG-20250630-WA0008.jpg',
  'IMG-20250630-WA0009.jpg',
  'IMG-20250630-WA0010.jpg',
  'IMG-20250630-WA0011.jpg',
  'IMG-20250630-WA0012.jpg',
  'WhatsApp Image 2025-06-30 at 11.15.29_367a3023.jpg',
  'WhatsApp Image 2025-06-30 at 11.17.55_41282317.jpg',
  'WhatsApp Image 2025-06-30 at 11.17.55_a159156a.jpg',
];

const Camera = () => {
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
    <div className="camera-page">
      <h1>CCTV</h1>
      <p>High-quality CCTV systems for surveillance.</p>
      <div className="camera-images">
        {images.map((filename, index) => (
          <div key={index} className="image-container">
            <img
              src={process.env.PUBLIC_URL + '/assets/images/cctv/' + filename}
              alt={`CCTV ${index + 1}`}
              className="camera-image"
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
              src={process.env.PUBLIC_URL + '/assets/images/cctv/' + images[zoomedIndex]}
              alt="Zoomed CCTV"
              className="modal-image"
            />
            <button className="modal-next" onClick={showNext}>{">"}</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Camera;
