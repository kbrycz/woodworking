import React from 'react';
import PhotoGallery from './components/PhotoGallery';
import './App.css'; // Assuming you want to keep the default styles

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Woodworking Projects</h1>
      </header>
      <PhotoGallery />
    </div>
  );
}

export default App;
