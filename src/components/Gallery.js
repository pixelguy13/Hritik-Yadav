import React from 'react';

const Gallery = () => {
  return (
    <div className="px-8 py-16 bg-white text-black">
      <h2 className="text-4xl font-bold">Gallery</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Add image placeholders as needed */}
        <div className="h-64 bg-gray-300 rounded"></div>
        <div className="h-64 bg-gray-300 rounded"></div>
        <div className="h-64 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default Gallery;
