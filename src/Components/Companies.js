import React from 'react'
import './Companies.css'; 
import ExactLogo from './ExactLogo.svg';

function Companies() {
  return (
    <div className="companies">     
     <svg className="svg-container" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
     <image xlinkHref={ExactLogo} className="moving-image" />
     </svg>
    </div>
  )
}

export default Companies