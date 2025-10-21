import React, { useState, useEffect, useCallback } from 'react';
import '../css/TVIntallation.css';
import '../css/ImageContainer.css';

const images = [
  '473069840_1134802521607609_400476088334239922_n.jpg',
  '502907864_3419911091481475_382371976531704332_n.jpg',
  'IMG-20250626-WA0041.jpg',
  'WhatsApp Image 2025-06-30 at 11.16.20_8cda117b.jpg',
  'WhatsApp Image 2025-06-30 at 11.16.22_960822c4.jpg',
];

const TVIntallation = () => {
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
    <div className="tvintallation-page">
      <h1>TV installations</h1>
      <p>Professional TV mounting and installation services.</p>
      <div className="tvintallation-images">
        {images.map((filename, index) => (
          <div key={index} className="image-container">
            <img
              src={process.env.PUBLIC_URL + '/assets/images/tvInstallation/' + filename}
              alt={`TV Installation ${index + 1}`}
              className="tvintallation-image"
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
              src={process.env.PUBLIC_URL + '/assets/images/tvInstallation/' + images[zoomedIndex]}
              alt="Zoomed TV Installation"
              className="modal-image"
            />
            <button className="modal-next" onClick={showNext}>{">"}</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TVIntallation;
