import React from 'react';

const MatClass = () => {
  return (
    <div className="px-8 py-16 bg-white text-black">
      <h2 className="text-4xl font-bold">MAT Class</h2>
      <ul className="mt-4">
        <li>✅ Class Highlights</li>
        <li>✅ Student-Focused Approach</li>
        <li>✅ Conceptual Teaching Style</li>
        <li>✅ Modern Learning Methods</li>
        <li>✅ Motivational Atmosphere</li>
      </ul>
      <h3 className="mt-8">Demos:</h3>
      <ul className="mt-4">
        <li>
          <a href="https://youtu.be/1lF-g0842tA" className="text-blue-500" target="_blank" rel="noopener noreferrer">
            MAT Orientation Video
          </a>
        </li>
        <li>
          <a href="https://youtu.be/f4NQwDhQiIg" className="text-blue-500" target="_blank" rel="noopener noreferrer">
            Demo Class 1
          </a>
        </li>
        <li>
          <a href="https://youtu.be/OdA-cOx559c" className="text-blue-500" target="_blank" rel="noopener noreferrer">
            Demo Class 2
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MatClass;
