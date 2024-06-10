import React from 'react';
// import { useNavigate } from 'react-router-dom';
import './DreamHome.css';
const DreamHome = () => {
    // const navigate = useNavigate();


  return (
    <div className="dream-home">
      <div className="header">
        <h1>
          Let's find your <br />
          <span className="title-highlight">Dream Home</span>
        </h1>
      </div>
      <div className="features">
        <div className="feature-item">
          <span className="bold-text">Verified</span> <br />
          <span className="normal-text">Listing</span>
        </div>
        <div className="feature-item">
          <span className="bold-text">Qualified</span> <br />
          <span className="normal-text">Experts</span>
        </div>
        <div className="feature-item">
          <span className="bold-text">Full</span> <br />
          <span className="normal-text">Experience</span>
        </div>

        {/* <button className="navigate-button" onClick={() => navigate('/marketplace-form')}>
        Go to Marketplace Form
      </button> */}
      </div>
    </div>
  );
}

export default DreamHome;
