import React from 'react';
import ImageCard from './ImageCard';
import VideoCard from './VideoCard';
import img from './my room.png';

function ShowCase() {
  return (
    <div className="flex flex-col justify-center items-center h-screen mt-10">
      <div className="flex justify-center">
        <ImageCard
          imageUrl={img}
          title="Grouppy"
          description="The mobile app im working on"
        />
        <VideoCard
          videoUrl={process.env.PUBLIC_URL + '/Video/myEntrance.mov'}
          autoplay={true}
          muted={true}
          title="DevHack2023/MyEntrance"
          description="This is my first hackaton, with topic Industrial Revolution 4.0, developing a mobile flutter app solution for hiring process with AI integration and firebase."
        />
        <ImageCard
          imageUrl={img}
          title="Landing Page no.2"
          description="The site you visting right now, i did some modeling animation with blender and 3js."
        />
      </div>
      <div className="mt-8"/>
        <div className="flex justify-center">
        <VideoCard
            videoUrl={process.env.PUBLIC_URL + '/Video/vr.mp4'}
            autoplay={true}
            muted={true}
            title="VrShoppingSystem"
            description="My final year project, in unity i tried to create a vr shop enviroment where people can buy stuff virtually."
          />
        <ImageCard
            imageUrl={process.env.PUBLIC_URL + '/images/hobokun.png'} // Fix the missing file extension
            title="Midnight Snack Run"
            description="It's a very simple platform game i made in unity, i learned how to draw pixel too." 
        />
        <ImageCard
            imageUrl={process.env.PUBLIC_URL + '/images/project3.png'} // Fix the missing file extension
            title="School Project"
            description="We have mybestfood a Andriod App for user to record their favourite food, this is a group assignment, and other mock up for recycling app and myEntrance" 
        />
        </div>
    </div>
  );
}

export default ShowCase;
