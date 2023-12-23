// header.jsx

import React from 'react';
import { images } from '../../constants';


const Header = () => {
    return (
        <div className="app-logos">
            <img src={images.TheCHECLogo} alt="TheCHECLogo" className="The-CHEC-Logo" />
            <img src={images.HealthyHeartslogo} alt="HealthyHeartslogo" className="Healthy-Hearts-logo" />
        </div>
    );
};

export default Header;
