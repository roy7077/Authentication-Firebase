"use client"

import { useState } from 'react';
import Card from './Card';

const Landing = () => {
  const handleLogout = () => {
    console.log('Logged out');
    // Add your logout logic here
  };

  const topics = [
    {
      title: 'Topic 1 GDJSSG',
      image: 'https://cdn.pixabay.com/photo/2022/03/10/13/58/rocket-7059912_1280.png',
      description: 'Simper took a galley to electronic typesetting, remaining essentially unchanged. It was popular.'
    },
    {
      title: 'Topic 2 ABCD',
      image: 'https://cdn.pixabay.com/photo/2016/06/22/08/40/atom-1472657_1280.png',
      description: 'Seen the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type.'
    },
    {
      title: 'Topic 1 GDJSSG',
      image: 'https://cdn.pixabay.com/photo/2022/03/10/13/58/rocket-7059912_1280.png',
      description: 'Simper took a galley to electronic typesetting, remaining essentially unchanged. It was popular.'
    },
    {
      title: 'Topic 2 ABCD',
      image: 'https://cdn.pixabay.com/photo/2016/06/22/08/40/atom-1472657_1280.png',
      description: 'Seen the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type.'
    },
    {
      title: 'Topic 1 GDJSSG',
      image: 'https://cdn.pixabay.com/photo/2022/03/10/13/58/rocket-7059912_1280.png',
      description: 'Simper took a galley to electronic typesetting, remaining essentially unchanged. It was popular.'
    },
    {
      title: 'Topic 2 ABCD',
      image: 'https://cdn.pixabay.com/photo/2016/06/22/08/40/atom-1472657_1280.png',
      description: 'Seen the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type.'
    },
    {
      title: 'Topic 3 ABDCS',
      image: 'https://cdn.pixabay.com/photo/2023/05/07/07/03/ai-generated-7975810_1280.jpg',
      description: 'Changed. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.'
    },
    // Add more topics as needed
  ];

  const [scrollIndex, setScrollIndex] = useState(0);

  const scrollLeft = () => {
    setScrollIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const scrollRight = () => {
    setScrollIndex((prevIndex) => Math.min(prevIndex + 1, topics.length - 1));
  };

  return (
    <div className="bg-[#212121] min-h-screen">
      <div className="flex justify-between items-center p-4 bg-[#212121] w-full fixed top-0 z-10">
        <div className="text-white text-xl font-bold">
          MyLogo
        </div>
        <div>
          <button
            onClick={handleLogout}
            className="bg-white text-black py-2 px-4 rounded hover:bg-gray-300"
          >
            Log Out
          </button>
        </div>
      </div>
      <div className="border-b border-gray-500"></div>
      <div className="pt-20 px-4 relative">
        <h2 className="text-white text-2xl font-bold mb-4">Popular Topics</h2>
        <div className="flex overflow-x-hidden py-2 w-full">
          <div
            className="flex transition-transform duration-300 
            w-full h-full  scroll  scroll-smooth"
            style={{ transform: `translateX(-${scrollIndex * 100}%)` }}
          >
            {topics.map((topic, index) => (
              <Card
                key={index}
                title={topic.title}
                image={topic.image}
                description={topic.description}
              />
            ))}
          </div>
        </div>
        <button
          onClick={scrollLeft}
          className="absolute top-1/2 left-4 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-500 z-10"
        >
          &#9664;
        </button>
        <button
          onClick={scrollRight}
          className="absolute top-1/2 right-4 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-500 z-10"
        >
          &#9654;
        </button>
      </div>
    </div>
  );
};

export default Landing;
