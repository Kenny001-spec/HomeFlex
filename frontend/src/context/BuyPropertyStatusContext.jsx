import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const PropertyStatusContext = createContext();

const PropertyStatusProvider = ({ children }) => {
  const [propertyStatus, setPropertyStatus] = useState(() => {
    const savedStatus = localStorage.getItem('propertyStatus');
    return savedStatus ? JSON.parse(savedStatus) : {};
  });

  useEffect(() => {
    const savePropertyStatus = async () => {
      try {
        await axios.post('http://localhost:5000/api/propertyStatus', propertyStatus);
      } catch (err) {
        console.error('Failed to save property status: ', err);
      }
    };

    savePropertyStatus();
    localStorage.setItem('propertyStatus', JSON.stringify(propertyStatus));
  }, [propertyStatus]);

  return (
    <PropertyStatusContext.Provider value={{ propertyStatus, setPropertyStatus }}>
      {children}
    </PropertyStatusContext.Provider>
  );
};

export default PropertyStatusProvider;
