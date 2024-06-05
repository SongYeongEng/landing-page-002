import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard';
import VideoCard from './VideoCard';
import img from './my room.png';
import grouppy from './Grouppy.png';

function ShowCase() {
  const [isMobile, setIsMobile] = useState(false);

  const initialCards = [
    {
      type: 'image',
      imageUrl: grouppy,
      title: 'Grouppy',
      description: 'Full stack app, React Native, Spring Boot and Mysql. Group up with people enjoy discount, working on it updating consistenly.',
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
      description: 'Current react web app, with 3js',
    },
    {
      type: 'video',
      videoUrl: process.env.PUBLIC_URL + '/Video/vr.mov',
      autoplay: true,
      muted: true,
      title: 'VrShoppingSystem',
      description: 'My Finaly Year Project, where i vision the future of E-Commerce where user can buy stuff in virtual reality.',
    },
    {
      type: 'image',
      imageUrl: process.env.PUBLIC_URL + '/images/hobokun.png',
      title: 'Midnight Snack Run',
      description: 'A simple 2d Platformer game i made and hosted on https://homurash.itch.io/midnight-snack-run',
    },
    {
      type: 'image',
      imageUrl: process.env.PUBLIC_URL + '/images/project3.png',
      title: 'School Project',
      description: 'We have MyBestFood, an Android app for users to record their favorite food. This is a group assignment, and other mock-ups for a recycling app and MyEntrance.',
    },
  ];

  const [cards] = useState(initialCards);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isMobile) {
    return (
      <div className="container mx-auto px-4 py-8" id="ShowCase">
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
        <div className="mt-8" />
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
    <div className="flex flex-col justify-center items-center h-screen mt-20 px-4" id="ShowCase">
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
      <div className="mt-8" />
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
