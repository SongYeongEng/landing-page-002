import React from 'react';

const ImageCard = ({ imageUrl, title, description }) => {
  return (
    <div className="max-w-xs rounded-2xl overflow-hidden m-4 hover:shadow-xl border-blue-500 border-gray-200 " >
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default ImageCard;