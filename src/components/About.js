import React from 'react';

const About = () => {
  return (
    <div className="px-8 py-16 bg-white text-black">
      <h2 className="text-4xl font-bold">About Me</h2>
      <p className="mt-4 text-lg">
        I'm a medical student passionate about growth, teaching mathematics, and creating educational digital content while balancing academics, teaching, and creativity.
      </p>
      <img src="/profile.jpg" alt="Hritik Yadav" className="mt-8 rounded-full w-32 h-32" />
    </div>
  );
};

export default About;
