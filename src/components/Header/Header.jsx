import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className='header' id="home-section">
      <div className='image'></div>
      <div className='w-100 h-100 overlay d-flex justify-content-start align-items-center text-white'>
        <div>
          <h1 className='title'>For Adventure Lovers</h1>
          <button className='btn btn-outline-light me-3'>
            Reserve Now
          </button>
          <button className='btn btn-light'>Get A Paln</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
