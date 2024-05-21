import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Home = () => {
  return (
    <div className="home ">
      <div className="row">
        <div className="left-side col-sm">
          <h1 className='mainheading'>One Stop Solution for SAP B1
            <div className='subheading'>
              With Unlimited placement assistance !</div>
            <div className='HomeButtons'>
              <button className='hbuttons'>Get Brochure</button>
              <button className='hbuttons hbright'>Request a Call Back</button>
            </div>
          </h1>
        </div>
        <div className="right-side col-sm">
          <img src="public/home-png.png" className='illustration' alt="home_illustration" />
        </div>
      </div>
    </div>
  );
};
