import React from 'react';

function Card({ title, body, buttonText, onButtonClick }) {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2 text-gray-800">{title}</h2>
        <p className="text-gray-600 mb-4">{body}</p>
        <button
          onClick={onButtonClick}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default Card;
