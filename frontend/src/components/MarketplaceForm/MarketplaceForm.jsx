import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { PropertyStatusContext } from '../../context/PropertyStatusContext';
import { TransactionContext } from '../../contest/TransactionContext'; 
import 'react-toastify/dist/ReactToastify.css';
import './MarketplaceForm.css';

const MarketplaceForm = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [creator, setCreator] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState('No file chosen');
  const navigate = useNavigate();
  const { currentAccount, purchaseProperty } = useContext(TransactionContext); 
  const { propertyStatus, setPropertyStatus } = useContext(PropertyStatusContext); 

  useEffect(() => {
    const checkWalletConnection = async () => {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          if (accounts.length > 0) {
            setIsWalletConnected(true);
          }
        } catch (error) {
          console.error("Error checking MetaMask connection:", error);
        }
      }
    };

    checkWalletConnection();
  }, []);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        setIsWalletConnected(true);
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      alert("MetaMask is not installed. Please install it to use this feature.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'title') setTitle(value);
    else if (name === 'location') setLocation(value);
    else if (name === 'price') setPrice(value);
    else if (name === 'creator') setCreator(value);
    else if (name === 'description') setDescription(value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setFileName(file ? file.name : 'No file chosen');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('location', location);
    formData.append('price', price);
    formData.append('creator', creator);
    formData.append('description', description);
    formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:5000/properties', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Property created:', response.data);
      toast.success('Property created successfully!');
      setTitle('');
      setLocation('');
      setPrice('');
      setCreator('');
      setDescription('');
      setImage(null);
      setFileName('No file chosen');
      setTimeout(() => navigate('/marketplace'), 2000);
      setIsModalOpen(false); 
    } catch (error) {
      console.error('There was an error creating the property!', error);
      toast.error('There was an error creating the property!');
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="marketplace-container">
      {!currentAccount ? (
        <div className="connect-wallet">
          <button onClick={connectWallet} className="button">Connect Wallet</button>
        </div>
      ) : (
        <>
          <button onClick={openModal} className="button">Create a New House</button>
          {isModalOpen && (
            <div className="modal-overlay">
              <div className="modal-content">
                <span className="close-modal" onClick={closeModal}>&times;</span>
                <h1 className="form-title">Create a New House</h1>
                <form className="marketplace-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Title:</label>
                    <input
                      type="text"
                      name="title"
                      value={title}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-columns">
                    <div className="form-group">
                      <label>Location:</label>
                      <input
                        type="text"
                        name="location"
                        value={location}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Price:</label>
                      <input
                        type="number"
                        name="price"
                        value={price}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Creator Name:</label>
                    <input
                      type="text"
                      name="creator"
                      value={creator}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Description:</label>
                    <textarea
                      name="description"
                      value={description}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group file-input">
                    <label>Image:</label>
                    <div className="file-input-wrapper">
                      <input
                        type="file"
                        id="file-upload"
                        name="creatorImage"
                        onChange={handleFileChange}
                        required
                      />
                      <label htmlFor="file-upload" className="file-upload-label">
                        Choose file
                      </label>
                      <span className="file-name-display">{fileName}</span>
                    </div>
                  </div>
                  <button type="submit">Create Property</button>
                </form>
              </div>
            </div>
          )}
          <ToastContainer />
        </>
      )}
    </div>
  );
};

export default MarketplaceForm;
