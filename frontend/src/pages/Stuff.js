import React, { useState, useEffect, useCallback } from 'react';
import '../css/Stuff.css';

const images = [
  'IMG-20250626-WA0028.jpg',
  'WhatsApp Image 2025-06-30 at 19.35.31_e1cc578e.jpg',
];

const Stuff = () => {
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
    <div className="stuff-page">
      <h1>Staff</h1>
      <p>Professional installation and maintenance services.</p>
      <div className="stuff-team">
        
        <p>At Interconnection, our dedicated team is the backbone of our exceptional service delivery. Led by Enoc Khoza, a passionate professional with a strong focus on quality and customer satisfaction, the team also includes skilled technicians Oscar and Mike, who bring hands-on experience and technical expertise to every project. Together, they ensure that every installation—from alarm systems to home automation—is done with precision, reliability, and care.</p>
      </div>
      <div className="stuff-images">
        {images.map((filename, index) => (
          <img
            key={index}
            src={process.env.PUBLIC_URL + '/assets/images/stuff/' + filename}
            alt={`Stuff ${index + 1}`}
            className="stuff-image"
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      {zoomedIndex !== null && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <button className="modal-prev" onClick={showPrev}>{"<"}</button>
            <img
              src={process.env.PUBLIC_URL + '/assets/images/stuff/' + images[zoomedIndex]}
              alt="Zoomed Stuff"
              className="modal-image"
            />
            <button className="modal-next" onClick={showNext}>{">"}</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Stuff;
