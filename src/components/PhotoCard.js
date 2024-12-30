// src/components/PhotoCard.js
import React from 'react'

export default function PhotoCard({ photo, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white shadow hover:shadow-md rounded-md overflow-hidden cursor-pointer 
                 transition-transform hover:scale-[1.02]"
    >
      <img
        src={photo.src}
        alt={photo.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{photo.title}</h3>
      </div>
    </div>
  )
}
