// src/components/PhotoModal.js
import React from 'react'

export default function PhotoModal({ photo, isOpen, onClose }) {
  if (!isOpen || !photo) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      {/* Content wrapper */}
      <div
        className="bg-white p-6 md:p-8 w-11/12 max-w-xl rounded-md shadow-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold mb-4">{photo.title}</h2>
        <img
          src={photo.src}
          alt={photo.title}
          className="w-full max-h-96 object-contain rounded mb-4"
        />
        <p className="text-gray-700 text-justify leading-relaxed">
          {photo.description}
        </p>
      </div>
    </div>
  )
}
