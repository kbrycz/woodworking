import React, { useState } from 'react';
import './PhotoGallery.css'; // Gallery styles
import PhotoModal from './PhotoModal'; // Import the modal component
import logo512 from '../images/logo512.png'; // Sample image for the gallery

const photos = [
  { id: 1, title: "Photo 1", src: logo512, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 2, title: "Photo 2", src: logo512, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 3, title: "Photo 3", src: logo512, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 4, title: "Photo 4", src: logo512, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 5, title: "Photo 5", src: logo512, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: 6, title: "Photo 6", src: logo512, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
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
