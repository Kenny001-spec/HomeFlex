import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ethers } from 'ethers';
import './Marketplace.css';
import { PropertyStatusContext } from '../../context/PropertyStatusContext';

const ConfirmPurchase = ({ onConfirmPayment }) => {
  const { propertyId } = useParams();
  const [property, setProperty] = useState(null);
  const [confirmed, setConfirmed] = useState(false);
  const { propertyStatus, setPropertyStatus } = useContext(PropertyStatusContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/properties/${propertyId}`)
      .then(response => {
        setProperty(response.data);
        // Check if the property is already bought
        if (propertyStatus[propertyId] === 'bought') {
          setConfirmed(true);
        }
      })
      .catch(error => {
        console.error('There was an error fetching the property details!', error);
      });
  }, [propertyId, propertyStatus]);

  const handleConfirmPurchase = async () => {
    if (confirmed) {
      alert('This house has already been bought!');
      return;
    }

    if (!window.ethereum) {
      alert('MetaMask is not installed!');
      return;
    }

    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const tx = await signer.sendTransaction({
        to: '0x5FbDB2315678afecb367f032d93F642f64180aa3', // Replace with the seller's address
        value: ethers.utils.parseEther(property.price.toString()),
      });

      await tx.wait();

      setConfirmed(true);
      onConfirmPayment(propertyId);
      setPropertyStatus(prevStatus => ({ ...prevStatus, [propertyId]: 'bought' }));

      setTimeout(() => {
        navigate('/marketplace');
      }, 2000);
    } catch (error) {
      console.error('Error with MetaMask transaction', error);
      alert('Transaction failed!');
    }
  };

  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <div className="confirm-purchase-container">
      <h1 className="purchase-heading">Purchase Confirmation</h1>
      <div className="card">
        <div className="image-container">
          <img src={`http://localhost:5000/${property.image}`} alt={property.title} />
        </div>
        <div className="card-body">
          <h2 className="card-title">{property.title}</h2>
          <p className="card-text">Location: {property.location}</p>
          <p className="card-text">Price: ${property.price}</p>
          <p className="card-creator">Creator: {property.creator}</p>
          <p className="card-description">Description: {property.description}</p>
          <button className="button" onClick={handleConfirmPurchase}>
            {confirmed ? 'Successful!' : 'Confirm Purchase'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPurchase;
