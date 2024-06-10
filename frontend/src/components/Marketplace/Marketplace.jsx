import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Marketplace.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import axios from 'axios';
import { PropertyStatusContext } from '../../context/PropertyStatusContext';

const Marketplace = ({ completedPurchases = [] }) => {
  const [properties, setProperties] = useState([]);
  const [processing, setProcessing] = useState(null);
  const navigate = useNavigate();
  const { propertyStatus, setPropertyStatus } = useContext(PropertyStatusContext);

  useEffect(() => {
    axios.get('http://localhost:5000/properties')
      .then(response => {
        const propertiesWithStatus = response.data.map(property => ({
          ...property,
          status: propertyStatus[property._id] || 'unsold'
        }));
        setProperties(propertiesWithStatus);
      })
      .catch(error => {
        console.error('There was an error fetching the properties!', error);
      });
  }, [propertyStatus]);

  const handleBuy = (propertyId) => {
    setProcessing(propertyId);
    setTimeout(() => {
      setProcessing(null);
      navigate(`/confirm/${propertyId}`);
    }, 2000);
  };

  return (
    <div className="blogs-container">
      <div className="title">
        <h2>House MarketPlace</h2>
      </div>

      {properties.map(property => (
        <div className="card" key={property._id}>
          <div className="image-container">
            <img src={`http://localhost:5000/${property.image}`} alt={property.title} />
            <div className={`status-button ${property.status === 'bought' ? 'sold' : 'unsold'}`}>
              {property.status === 'bought' ? 'Sold' : 'Unsold'}
            </div>
          </div>
          <h1 className="card-title">{property.title}</h1>
          <div className="card-text blog-location">
            <FaMapMarkerAlt /> <p>Location: {property.location}</p>
          </div>
          <div className="card-text blog-price price">
            <p>Price: ${property.price}</p>
          </div>
          <div className="card-creator">
            <p>Creator: {property.creator}</p>
          </div>
          <div className="card-description">
            <p>Description: {property.description}</p>
          </div>
          <div className="read-more">
            {property.status === 'bought' || completedPurchases.includes(property._id) ? (
              <button className="button-sold" disabled>House Purchased</button>
            ) : (
              <button
                onClick={() => handleBuy(property._id)}
                disabled={processing === property._id}
              >
                {processing === property._id ? 'Processing...' : `Buy House for $${property.price}`}
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Marketplace;
