import React, { useState } from 'react';
import './RegistrationForm.css';
import { db } from "../../firebase";
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const RegistrationForm = ({ onFormSubmit }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedOrg, setSelectedOrg] = useState('');
  const [submitted, setSubmitted] = useState(false); // State to track submission
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const organizations = [
    'Cardiovascular Health Education Campaign'
    // Add more organizations as needed
  ];

  const handlePhoneNumberChange = (event) => {
    const number = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    if (number.length <= 10) {
      setPhoneNumber(number);
      if (number.length === 10) {
        setPhoneNumberError(''); // Clear the error when the phone number is correct
      }
    } else {
      setPhoneNumberError('Please enter a valid 10-digit phone number!');
    }
  };

  const handleOrgChange = (event) => {
    setSelectedOrg(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (phoneNumber.length === 10) {
      try {
        await addDoc(collection(db, "input-group"), {
          phone_number: phoneNumber,
          organization: selectedOrg,
          timestamp: serverTimestamp(),
        });
        setPhoneNumber("");
        setSelectedOrg("");
        onFormSubmit();
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    } else {
      setPhoneNumberError('Please enter a valid 10-digit phone number!');
    }
  };

  return (
    <div className="form-container">
      {submitted ? (
        <div className="thank-you-message">
          <p>You are now enrolled in Heart2Heart!</p>
        </div>
      ) : (
        <>
          <h1 className="title">Heart2Heart</h1>
          <div className="description-container">
            <p className="description-text">
              A text message-based social network designed to encourage cardiovascular disease prevention
            </p>
          </div>
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
              {phoneNumberError && <span className="error-message">{phoneNumberError}</span>}
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
        </>
      )}
    </div>
  );
};

export default RegistrationForm;
