// RegistrationForm.js
import React, { useState } from 'react';
import './RegistrationForm.css'; // Import the CSS file for styling

const RegistrationForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedOrg, setSelectedOrg] = useState('');

  const organizations = [
    'Cardiovascular Health Education Campaign'
    // Add more organizations as needed
  ];

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleOrgChange = (event) => {
    setSelectedOrg(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Phone Number:', phoneNumber);
    console.log('Selected Organization:', selectedOrg);
    // You can add further processing or API calls here
  };

  return (
    <div className="form-container">
      {/* <h1>Heart2Heart</h1> */}
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="input-group">
          <input
            type="tel"
            id="phone"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div className="input-group">
          <select
            id="organizations"
            value={selectedOrg}
            onChange={handleOrgChange}
            required
          >
            <option value="">Choose your organization</option>
            {organizations.map((org, index) => (
              <option key={index} value={org}>
                {org}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
