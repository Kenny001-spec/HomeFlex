import React from 'react';
import './Blogs.css';

const Blogs = () => {
  return (
    <div className="blogs-container">
      <div className="title">Our Blog</div> 
      
      <div className="blog-post">
        <div className="image-container">
          <img src="hom1.jpeg" alt="Blog" />
        </div>
        <div className="blog-title">10 things to know</div>
        <div className="blog-subtitle">Moving to completely</div>
        <div className="read-more">
          <button>Continue Reading</button>
        </div>
      </div>

      <div className="blog-post">
        <div className="image-container">
          <img src="hom1.jpeg" alt="Blog" />
        </div>
        <div className="blog-title">10 things to know</div>
        <div className="blog-subtitle">Moving to completely</div>
        <div className="read-more">
          <button>Continue Reading</button>
        </div>
      </div>

      <div className="blog-post">
        <div className="image-container">
          <img src="hom1.jpeg" alt="Blog" />
        </div>
        <div className="blog-title">10 things to know</div>
        <div className="blog-subtitle">Moving to completely</div>
        <div className="read-more">
          <button>Continue Reading</button>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
