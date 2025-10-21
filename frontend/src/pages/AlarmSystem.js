import React, { useState, useEffect, useCallback } from 'react';
import '../css/AlarmSystem.css';
import '../css/ImageContainer.css';

const images = [
  'Brinant-41-b11beb5f-640w.webp',
  'Burglar-alarm-sensor-square-1024x1024.jpg',
  'images.jpeg',
  'Ring-System.jpg',
  'security-alarm-upgrades-pretoria-1024x585.webp',
  'wired_home_security_model802a.jpeg',
];

const AlarmSystem = () => {
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
    <div className="alarm-system-page">
      <h1>Alarm system</h1>
      <p>Reliable alarm systems to secure your home.</p>
      <div className="alarm-system-images">
        {images.map((filename, index) => (
          <div key={index} className="image-container">
            <img
              src={process.env.PUBLIC_URL + '/assets/images/AlarmSystem/' + filename}
              alt={`Alarm System ${index + 1}`}
              className="alarm-system-image"
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
              src={process.env.PUBLIC_URL + '/assets/images/AlarmSystem/' + images[zoomedIndex]}
              alt="Zoomed Alarm System"
              className="modal-image"
            />
            <button className="modal-next" onClick={showNext}>{">"}</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlarmSystem;
