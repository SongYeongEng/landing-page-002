import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard';
import VideoCard from './VideoCard';
import img from './my room.png';

function ShowCase() {
  const [isMobile, setIsMobile] = useState(false);
  // Initial state with card data
  const initialCards = [
    {
      type: 'image',
      imageUrl: img,
      title: 'Grouppy',
      description: 'The mobile app I\'m working on',
    },
    {
      type: 'video',
      videoUrl: process.env.PUBLIC_URL + '/Video/myEntrance.mov',
      autoplay: true,
      muted: true,
      title: 'DevHack2023/MyEntrance',
      description: 'This is my first hackathon, with the topic Industrial Revolution 4.0, developing a mobile flutter app solution for the hiring process with AI integration and Firebase.',
    },
    {
      type: 'image',
      imageUrl: img,
      title: 'Landing Page no.2',
      description: 'The site you\'re visiting right now, I did some modeling animation with Blender and 3js.',
    },
    {
      type: 'video',
      videoUrl: process.env.PUBLIC_URL + '/Video/vr.mp4',
      autoplay: true,
      muted: true,
      title: 'VrShoppingSystem',
      description: 'My final year project, in Unity I tried to create a VR shop environment where people can buy stuff virtually.',
    },
    {
      type: 'image',
      imageUrl: process.env.PUBLIC_URL + '/images/hobokun.png',
      title: 'Midnight Snack Run',
      description: 'It\'s a very simple platform game I made in Unity, I learned how to draw pixel art too.',
    },
    {
      type: 'image',
      imageUrl: process.env.PUBLIC_URL + '/images/project3.png',
      title: 'School Project',
      description: 'We have MyBestFood, an Android app for users to record their favorite food. This is a group assignment, and other mock-ups for a recycling app and MyEntrance.',
    },
  ];

  // State to manage the order of cards
  const [cards, setCards] = useState(initialCards);



  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Check initial viewport size
    window.addEventListener('resize', handleResize); // Listen for viewport size changes

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up event listener
    };
  }, []);

  if (isMobile) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col justify-center items-center">
          {cards.slice(0, 3).map((card, index) => (
            card.type === 'image' ? (
              <ImageCard
                key={index}
                imageUrl={card.imageUrl}
                title={card.title}
                description={card.description}
              />
            ) : (
              <VideoCard
                key={index}
                videoUrl={card.videoUrl}
                autoplay={card.autoplay}
                muted={card.muted}
                title={card.title}
                description={card.description}
              />
            )
          ))}
        </div>
        <div className="mt-8"/>
        <div className="flex flex-col justify-center items-center">
          {cards.slice(3).map((card, index) => (
            card.type === 'image' ? (
              <ImageCard
                key={index}
                imageUrl={card.imageUrl}
                title={card.title}
                description={card.description}
              />
            ) : (
              <VideoCard
                key={index}
                videoUrl={card.videoUrl}
                autoplay={card.autoplay}
                muted={card.muted}
                title={card.title}
                description={card.description}
              />
            )
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen mt-20 px-4">
      <div className="flex flex-col md:flex-row justify-center items-center">
        {cards.slice(0, 3).map((card, index) => (
          card.type === 'image' ? (
            <ImageCard
              key={index}
              imageUrl={card.imageUrl}
              title={card.title}
              description={card.description}
            />
          ) : (
            <VideoCard
              key={index}
              videoUrl={card.videoUrl}
              autoplay={card.autoplay}
              muted={card.muted}
              title={card.title}
              description={card.description}
            />
          )
        ))}
      </div>
      <div className="mt-8"/>
      <div className="flex flex-col md:flex-row justify-center items-center">
        {cards.slice(3).map((card, index) => (
          card.type === 'image' ? (
            <ImageCard
              key={index}
              imageUrl={card.imageUrl}
              title={card.title}
              description={card.description}
            />
          ) : (
            <VideoCard
              key={index}
              videoUrl={card.videoUrl}
              autoplay={card.autoplay}
              muted={card.muted}
              title={card.title}
              description={card.description}
            />
          )
        ))}
      </div>
    </div>
  );
}

export default ShowCase;
