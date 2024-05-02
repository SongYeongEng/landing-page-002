import React from 'react'
import './Companies.css'; 
import ExactLogo from './Exact_logo.svg';
import BoatLogo from './boat.svg'; // Import the other PNG image

function Companies() {
  return (
    <div className="companies">     
     <svg className="svg-container" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 75">
     <image xlinkHref={BoatLogo} className="moving-image"  x="-300" />
     <image xlinkHref={ExactLogo} className="moving-image" />
     </svg>
    </div>
  )
}

export default Companies