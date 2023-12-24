import React, { useState } from 'react';
import { Registration, Header } from './container';
import { images } from './constants';
import './App.css';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const containerClass = isSubmitted ? 'app-container center-content' : 'app-container';

  return (
    <div className={containerClass}>
      <Header />
      {isSubmitted ? (
        <div className="thank-you-container">
          <h1>Thank You!</h1>
          <p>Your registration is complete.</p>
        </div>
      ) : (
        <>
          <Registration onFormSubmit={() => setIsSubmitted(true)} />
          <img src={images.bottomRightImage} alt="Bottom right image" className="bottom-right-image" />
        </>
      )}
    </div>
  );
}

export default App;
