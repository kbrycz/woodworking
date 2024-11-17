import React, { useState } from 'react';
import './PhotoGallery.css';
import PhotoModal from './PhotoModal';
import chess from '../images/chess1.jpg';
import chess2 from '../images/chess2.jpg';
import cutting from '../images/cutting.jpg';
import desk from '../images/desk.jpg';
import end_table from '../images/end.jpg';
import table from '../images/beer.jpg';
import entryway from '../images/entryway.jpg';
import puzzle_cube from '../images/puzzle_cube.jpg';
import jenga from '../images/jenga.jpg';
import game_storage from '../images/game_storage.jpg';
import box from '../images/box.jpg';
import endgrain_board from '../images/endgrain-board.jpg';
import puzzle from '../images/puzzle.jpg';
import coffee from '../images/coffee.jpg';
import coffee2 from '../images/coffee2.jpg';
import pencil from '../images/pencil.jpg';


const photos = [
    { 
      id: 1, 
      title: "Chess Board (Walnut Trim)", 
      src: chess, 
      description: "This chessboard features a striking combination of cherry and walnut woods. It was my second attempt at making a chessboard, where I aimed for a more polished look by adding a walnut trim with precise 45-degree angles. The natural contrast between the dark walnut and the lighter cherry really enhances the overall aesthetic." 
    },
    { 
      id: 2, 
      title: "Entryway Table", 
      src: entryway, 
      description: "This entryway table was my final project in Woodworking 103. Crafted from cherry wood and finished with a matching cherry stain, it features elegant tapered legs and a drawer with dovetail joints for added strength. Standard domino joinery ensures the piece is sturdy and durable." 
    },
    { 
      id: 3, 
      title: "Liftable Top Coffee Table", 
      src: coffee2, 
      description: "This coffee table, crafted from beautiful cherry wood, combines custom woodworking with hardware purchased from Amazon. Allows you to store items and access them with ease." 
    },
    { 
      id: 4, 
      title: "Extending Coffee Table", 
      src: coffee, 
      description: "This coffee table, crafted from beautiful cherry wood, combines custom woodworking with hardware purchased from Amazon. It’s perfect for enjoying meals on the couch! This was a precise and challenging project, as ensuring the tabletop sits flush with the base required careful attention to detail." 
    },
    { 
      id: 5, 
      title: "Standing Desk", 
      src: desk, 
      description: "This is a custom standing desk featuring a cherry wood desktop mounted on adjustable standing legs. It's designed to cater to the needs of remote work, allowing for better ergonomics and flexibility. This piece is my favorite due to its everyday utility and the warmth that the cherry wood brings to my workspace." 
    },
    { 
      id: 6, 
      title: "Puzzle Table", 
      src: puzzle, 
      description: "This Puzzle Table, crafted from cherry wood, adds both functionality and style to any space. Designed as a fun yet challenging project, it’s an engaging piece that showcases the beauty of cherry while offering a unique and entertaining experience." 
    },
    { 
      id: 7, 
      title: "Cutting Board (End Grain)", 
      src: endgrain_board, 
      description: "This end grain cutting board, crafted from walnut and maple with a juice groove, offers both durability and a beautiful aesthetic. The contrasting woods create a striking visual, while the end grain construction makes it ideal for heavy kitchen use." 
    },
    { 
      id: 8, 
      title: "End Table", 
      src: end_table, 
      description: "A sophisticated end table that showcases advanced joinery techniques. This project was the culmination of my Chicago Woodworking 102 class, where I used both mortise and tenon joints, as well as domino joints, to create a sturdy and visually appealing structure. It’s a testament to precision and craftsmanship." 
    },
    { 
      id: 9, 
      title: "Game Table", 
      src: table, 
      description: "This versatile game table is used for a variety of activities when hosting guests. It’s sturdy enough to accommodate different games while also functioning as my workshop table. It’s practical, durable, and the ideal piece for both fun gatherings and hands-on projects." 
    },
    { 
      id: 10, 
      title: "Chess Board (Cherry Trim)", 
      src: chess2, 
      description: "As my very first chessboard project, this piece also uses cherry and walnut woods. Due to limited materials at the time, it turned out smaller than I had hoped. Without access to a miter saw, I wasn’t able to create the 45-degree angled edges, so the trim feels less refined. Nonetheless, it was a valuable learning experience." 
    },
    { 
      id: 11, 
      title: "Pencil Holder", 
      src: pencil, 
      description: "I had some spare wood so I put together a nice pencil holder. Stores everything nicely and the cherry wood makes it feel premium." 
    },
    { 
      id: 12, 
      title: "Cutting Board (Edge Grain)", 
      src: cutting, 
      description: "Crafted from leftover walnut and cherry, this cutting board is a simple yet functional project. While it's a great starting piece, I plan on creating more intricate designs with improved aesthetics in future cutting boards. It’s a great way to use up scrap wood while making something practical." 
    },
      { 
        id: 13, 
        title: "Puzzle Cube", 
        src: puzzle_cube, 
        description: "This 6-piece puzzle cube, made from cherry wood, was a fun yet challenging project using scrap material. Despite its simple appearance, achieving the precision needed for a perfect cube was surprisingly difficult. I look forward to refining this design with future builds." 
      },
      { 
        id: 14, 
        title: "Jenga", 
        src: jenga, 
        description: "With an abundance of extra poplar wood, I decided to craft a set of Jenga blocks. Finished with Odie's oil, the blocks have a pleasing appearance and a great scent. While poplar isn't my favorite wood, its affordability made it ideal for this project, where aesthetics are less important." 
      },
      { 
        id: 15, 
        title: "Game Storage", 
        src: game_storage, 
        description: "This simple game storage unit was a quick and efficient one-day project. Made from pine wood and spray-painted black, it provides much-needed space for organizing board games. Using basic screws and no complex joinery, it was designed with practicality in mind." 
      },
      { 
        id: 16, 
        title: "Simple Box", 
        src: box, 
        description: "This white oak box with a handle on top is a straightforward yet elegant project. The grain of the oak adds a natural charm, and the handle makes it a practical storage solution, perfect for small items." 
      }
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
