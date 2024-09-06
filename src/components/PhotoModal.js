import React from 'react';
import './PhotoModal.css'; // Import modal-specific styles

const PhotoModal = ({ photo, closeModal }) => {
  return (
    <div className="modal-backdrop" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={photo.src} alt={photo.title} className="modal-photo" />
        <h2>{photo.title}</h2>
        <p>{photo.description}</p>
        {/* Update the close button to an X */}
        <button className="close-button" onClick={closeModal}>&times;</button>
      </div>
    </div>
  );
};

export default PhotoModal;
