import React, { useState } from 'react';
import './PhotoGallery.css'; // Gallery styles
import PhotoModal from './PhotoModal'; // Import the modal component
import chess from '../images/chess1.jpg'; // Sample image for the gallery
import chess2 from '../images/chess2.jpg'; // Sample image for the gallery
import cutting from '../images/cutting.jpg'; // Sample image for the gallery
import desk from '../images/desk.png'; // Sample image for the gallery
import end_table from '../images/end.jpg'; // Sample image for the gallery
import table from '../images/beer.jpg'; // Sample image for the gallery


const photos = [
    { 
      id: 1, 
      title: "Chess Board (Walnut Trim)", 
      src: chess, 
      description: "This chessboard features a striking combination of cherry and walnut woods. It was my second attempt at making a chessboard, where I aimed for a more polished look by adding a walnut trim with precise 45-degree angles. The natural contrast between the dark walnut and the lighter cherry really enhances the overall aesthetic." 
    },
    { 
      id: 2, 
      title: "Chess Board (Cherry Trim)", 
      src: chess2, 
      description: "As my very first chessboard project, this piece also uses cherry and walnut woods. Due to limited materials at the time, it turned out smaller than I had hoped. Without access to a miter saw, I wasn’t able to create the 45-degree angled edges, so the trim feels less refined. Nonetheless, it was a valuable learning experience." 
    },
    { 
      id: 3, 
      title: "Cutting Board", 
      src: cutting, 
      description: "Crafted from leftover walnut and cherry, this cutting board is a simple yet functional project. While it's a great starting piece, I plan on creating more intricate designs with improved aesthetics in future cutting boards. It’s a great way to use up scrap wood while making something practical." 
    },
    { 
      id: 4, 
      title: "Standing Desk", 
      src: desk, 
      description: "This is a custom standing desk featuring a cherry wood desktop mounted on adjustable standing legs. It's designed to cater to the needs of remote work, allowing for better ergonomics and flexibility. This piece is my favorite due to its everyday utility and the warmth that the cherry wood brings to my workspace." 
    },
    { 
      id: 5, 
      title: "End Table", 
      src: end_table, 
      description: "A sophisticated end table that showcases advanced joinery techniques. This project was the culmination of my Chicago Woodworking 102 class, where I used both mortise and tenon joints, as well as domino joints, to create a sturdy and visually appealing structure. It’s a testament to precision and craftsmanship." 
    },
    { 
      id: 6, 
      title: "Game Table", 
      src: table, 
      description: "This versatile game table is used for a variety of activities when hosting guests. It’s sturdy enough to accommodate different games while also functioning as my workshop table. It’s practical, durable, and the ideal piece for both fun gatherings and hands-on projects." 
    },
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
