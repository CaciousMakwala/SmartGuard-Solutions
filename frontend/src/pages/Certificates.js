import React from 'react';
import '../css/Certificates.css';
import '../css/ImageContainer.css';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'ISO 9001 Certification',
      description: 'Quality management systems certification.',
      imageUrl: 'https://via.placeholder.com/150?text=ISO+9001',
    },
    {
      id: 2,
      title: 'Certified Security Specialist',
      description: 'Professional certification for security expertise.',
      imageUrl: 'https://via.placeholder.com/150?text=Security+Specialist',
    },
    {
      id: 3,
      title: 'Environmental Compliance',
      description: 'Certification for environmental standards compliance.',
      imageUrl: 'https://via.placeholder.com/150?text=Environmental+Compliance',
    },
  ];

  return (
    <div className="certificates-page">
      <h1>Certificates</h1>
      <p>Explore our certifications and accreditations that demonstrate our commitment to quality and professionalism.</p>
      <div className="certificates-grid">
        {certificates.map((cert) => (
          <div key={cert.id} className="certificate-card">
            <div className="image-container">
              <img src={cert.imageUrl} alt={cert.title} className="certificate-image" />
            </div>
            <h3 className="certificate-title">{cert.title}</h3>
            <p className="certificate-description">{cert.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
