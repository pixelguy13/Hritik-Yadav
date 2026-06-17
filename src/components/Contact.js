import React from 'react';

const Contact = () => {
  return (
    <div className="px-8 py-16 bg-gray-100 text-black">
      <h2 className="text-4xl font-bold">Contact Me</h2>
      <form className="mt-4">
        <input type="text" placeholder="Name" className="w-full p-2 border-b border-gray-400" />
        <input type="email" placeholder="Email" className="w-full p-2 border-b border-gray-400" />
        <textarea placeholder="Message" className="w-full p-2 border-b border-gray-400"></textarea>
        <button className="px-4 py-2 mt-2 text-white bg-blue-600 rounded">Send</button>
      </form>
      <p className="mt-4">WhatsApp: +977 9842612207</p>
      <div className="mt-4">
        <a href="https://www.youtube.com/channel/UConCKTeCu_nntgjgtCTvhww" className="text-blue-500">YouTube</a>
        <a href="https://www.facebook.com/hreet.eek" className="text-blue-500">Facebook</a>
        <a href="https://www.instagram.com/_hritikyadav_/" className="text-blue-500">Instagram</a>
      </div>
    </div>
  );
};

export default Contact;
