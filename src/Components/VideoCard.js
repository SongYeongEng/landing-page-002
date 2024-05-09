import React from 'react';

const VideoCard = ({ videoUrl, title, description,autoplay,muted }) => {
  return (
    <div className="max-w-xl rounded-2xl overflow-hidden shadow-lg m-4 hover:shadow-xl">
      <video className="w-full" controls autoPlay={autoplay} muted={muted}>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
