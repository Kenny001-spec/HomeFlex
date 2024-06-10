import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const PropertyStatusContext = createContext();

const PropertyStatusProvider = ({ children }) => {
  const [propertyStatus, setPropertyStatus] = useState(() => {
    const savedStatus = localStorage.getItem('propertyStatus');
    return savedStatus ? JSON.parse(savedStatus) : {};
  });

  useEffect(() => {
    localStorage.setItem('propertyStatus', JSON.stringify(propertyStatus));
  }, [propertyStatus]);

  return (
    <PropertyStatusContext.Provider value={{ propertyStatus, setPropertyStatus }}>
      {children}
    </PropertyStatusContext.Provider>
  );
};

export default PropertyStatusProvider;
