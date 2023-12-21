import React from 'react';
import RegistrationForm from './RegistrationForm';
import './App.css'; // Import the CSS file for styling

function App() {
  return (
    <div className="app-container">
      <h1>Heart2Heart</h1>
      <RegistrationForm />
      <img src={require('./bottomRightImage.png')} alt="Bottom right image" className="bottom-right-image" />
    </div>
  );
}

export default App;
