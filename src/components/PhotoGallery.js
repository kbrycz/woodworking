import React, { useState } from 'react';
import './PhotoGallery.css'; // Gallery styles
import PhotoModal from './PhotoModal'; // Import the modal component
import chess from '../images/chess.png'; // Sample image for the gallery
import cutting from '../images/cutting.png'; // Sample image for the gallery
import desk from '../images/desk.png'; // Sample image for the gallery
import end_table from '../images/end_table.png'; // Sample image for the gallery


const photos = [
  { id: 1, title: "Chessboard", src: chess, description: "A simple chessboard created with cherry and walnut." },
  { id: 2, title: "Cutting board", src: cutting, description: "A cutting board created with walnut and cherry." },
  { id: 3, title: "Desk", src: desk, description: "A cherry desk top with standing desk legs." },
  { id: 4, title: "End table", src: end_table, description: "A poplar endtable made with nice jointery." }
];

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null); // State to track the clicked photo

  const openModal = (photo) => {
    setSelectedPhoto(photo); // Set the clicked photo as the selected photo
  };

  const closeModal = () => {
    setSelectedPhoto(null); // Close the modal
  };

  return (
    <div>
      <div className="photo-gallery">
        {photos.map(photo => (
          <div key={photo.id} className="photo-item" onClick={() => openModal(photo)}>
            <img src={photo.src} alt={photo.title} className="photo" />
            <h3>{photo.title}</h3>
          </div>
        ))}
      </div>

      {/* Render the modal if a photo is selected */}
      {selectedPhoto && (
        <PhotoModal
          photo={selectedPhoto}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default PhotoGallery;
