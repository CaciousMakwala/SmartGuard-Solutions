import React, { useState, useEffect } from 'react';
import { send, init } from '@emailjs/browser';
import '../css/CallRequestForm.css';

const CallRequestForm = ({ onClose, className }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    init('qOAvbxglV6NKKkDQk'); // Initialize EmailJS with your public key
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && phone.trim()) {
      setIsSubmitting(true);
      const templateParams = {
        name: name,
        PhoneNumber: phone,
        time: new Date().toLocaleString(),
      };

      send(
        'service_egp1pm5', // EmailJS service ID
        'interkonnection', // EmailJS template ID
        templateParams,
        'qOAvbxglV6NKKkDQk' // EmailJS public key
      )
      .then((response) => {
        setStatusMessage('Thank you for your request! We will get back to you soon.');
        setIsSubmitting(false);
        setName('');
        setPhone('');
        setTimeout(() => {
          setStatusMessage('');
          onClose();
        }, 3000);
      }, (error) => {
        setStatusMessage('Failed to send request. Please try again later.');
        setIsSubmitting(false);
      });
    }
  };

  return (
    <div className={`call-request-form ${className}`}>
      <img src="/assets/logo.jpg" alt="Company Logo" className="company-logo" />
      {statusMessage ? (
        <div className="thank-you-message">
          {statusMessage}
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Request a Call</h2>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            disabled={isSubmitting}
          />
          <label htmlFor="phone">Phone Number:</label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            disabled={isSubmitting}
          />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send'}
          </button>
        </form>
      )}
    </div>
  );
};

export default CallRequestForm;
