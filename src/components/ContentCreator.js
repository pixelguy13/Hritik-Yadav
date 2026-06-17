import React from 'react';

const ContentCreator = () => {
  return (
    <div className="px-8 py-16 bg-gray-100 text-black">
      <h2 className="text-4xl font-bold">Content Creator</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <a href="https://youtu.be/HwCd10MEv-Q" target="_blank" rel="noopener noreferrer" className="p-4 bg-white shadow-lg rounded">
          A Day as a MBBS Student
        </a>
        <a href="https://youtu.be/1OEDclG1Wh4" target="_blank" rel="noopener noreferrer" className="p-4 bg-white shadow-lg rounded">
          How to Prepare for CEE
        </a>
        <a href="https://youtu.be/Y6353IbAdm0" target="_blank" rel="noopener noreferrer" className="p-4 bg-white shadow-lg rounded">
          FIRST LOVE: A Short Film
        </a>
      </div>
    </div>
  );
};

export default ContentCreator;
