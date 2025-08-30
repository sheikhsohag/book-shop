import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'; // correct import

function BrandLogo() {
  return (
    <div className="gap-2 text-2xl font-bold text-blue-700">
      <FontAwesomeIcon icon={faEye} className='text-gray-500 text-4xl'/>
    </div>
  );
}

export default BrandLogo;
