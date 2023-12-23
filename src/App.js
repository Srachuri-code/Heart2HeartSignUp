import React from 'react';

import { Registration } from './container';
import { images } from './constants';
import './App.css';


function App() {
  return (
    <div className="app-container">
      <Registration />
      <img src={images.bottomRightImage} alt="Bottom right image" className="bottom-right-image" />
    </div>
  );
}

export default App;
