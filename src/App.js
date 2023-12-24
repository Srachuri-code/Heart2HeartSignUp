import React from 'react';

import { Registration, Header, ThankYouPage } from './container';
import { images } from './constants';
import './App.css';


function App() {
  return (
    <div className="app-container">
      <Header />
      <Registration />
      <img src={images.bottomRightImage} alt="Bottom right image" className="bottom-right-image" />
    

   </div>
  );
}

export default App;
