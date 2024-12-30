// src/App.js
import React from 'react'
import PhotoGallery from './components/PhotoGallery'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-6 px-4 flex items-center">
          {/* Replaced <Title> from magic-ui-react with plain <h1> */}
          <h1 className="text-2xl font-bold text-gray-800">
            Woodworking Showcase
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <PhotoGallery />
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 py-4 mt-4">
        <div className="max-w-7xl mx-auto text-center text-gray-600">
          © {new Date().getFullYear()} Meet Karl
        </div>
      </footer>
    </div>
  )
}

export default App
