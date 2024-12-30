// src/components/PhotoGallery.js
import React, { useState } from 'react'
import PhotoCard from './PhotoCard'
import PhotoModal from './PhotoModal'
import { photos } from '../data/photos'

// Removed import { Message } from 'magic-ui-react'

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  const openModal = (photo) => {
    setSelectedPhoto(photo)
    setIsOpen(true)
  }

  const closeModal = () => {
    setSelectedPhoto(null)
    setIsOpen(false)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Replace <Message> with a standard Tailwind banner */}
      <div className="mb-8">
        <div className="bg-blue-100 text-blue-700 p-4 rounded">
          Click any project to see more details!
        </div>
      </div>

      {/* Grid of photo cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            onClick={() => openModal(photo)}
          />
        ))}
      </div>

      {/* Modal */}
      <PhotoModal photo={selectedPhoto} isOpen={isOpen} onClose={closeModal} />
    </div>
  )
}
