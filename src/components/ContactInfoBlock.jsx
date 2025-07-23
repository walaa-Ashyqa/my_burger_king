import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactInfoBlock.css';

function ContactInfoBlock({ icon, title, value }) {
  return (
    <div className="contact-info-block bg-white rounded-4 shadow-sm p-4 d-flex align-items-center">
      <div className="me-3 d-flex justify-content-center align-items-center">
        <img src={icon} alt={title} />
      </div>
      <div className="text-content flex-grow-1">
        <h4 className="info-title mb-1">{title}</h4>
        <p className="info-value mb-0">{value}</p>
      </div>
    </div>
  );
}

export default ContactInfoBlock;