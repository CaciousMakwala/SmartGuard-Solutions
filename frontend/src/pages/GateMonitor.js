import React, { useState, useEffect, useCallback } from 'react';
import '../css/GateMonitor.css';
import '../css/ImageContainer.css';

const images = [
  '513643797_1072459921719688_1307603676416641077_n.jpg',
  'Aiphone-introductory-image-final.png',
  'Centurion-D5-Smart-incl-2x-remotes.jpg',
  'choosing-gate-motor.jpg',
  'images.jpeg',
  'tjk.jpg',
  'WhatsApp Image 2025-06-30 at 11.16.21_48582426.jpg',
  'WhatsApp Image 2025-06-30 at 11.16.21_f27a5048.jpg',
  'WhatsApp Image 2025-06-30 at 11.16.22_10aea165.jpg',
  'WhatsApp Image 2025-06-30 at 11.16.22_66d73fa5.jpg',
];

const GateMonitor = () => {
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
    <div className="gatemonitor-page">
      <h1>Gate motor</h1>
      <p>Automated gate motors for convenience and security.</p>
      <div className="gate-monitor-images">
        {images.map((filename, index) => (
          <div key={index} className="image-container">
            <img
              src={process.env.PUBLIC_URL + '/assets/images/GateMonitor/' + filename}
              alt={`Gate Monitor ${index + 1}`}
              className="gate-monitor-image"
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
              src={process.env.PUBLIC_URL + '/assets/images/GateMonitor/' + images[zoomedIndex]}
              alt="Zoomed Gate Monitor"
              className="modal-image"
            />
            <button className="modal-next" onClick={showNext}>{">"}</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GateMonitor;
