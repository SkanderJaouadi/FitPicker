import React from 'react';

function OutfitPreview({ outfit_name, outfit_created_at, image_url }) {
  return (
    <div className="p-4 border rounded shadow-md text-center">
      <img className="h-64 w-full object-cover rounded" src={image_url} alt={outfit_name} />
      <h3 className="text-xl font-bold mt-2">{outfit_name}</h3>
      <h5 className="text-gray-500 mb-3">Created on: {outfit_created_at}</h5>
      <button className="border border-gray-400 text-sm px-4 py-2 rounded hover:bg-gray-200 transition">
        Favorite
      </button>
    </div>
  );
}

export default OutfitPreview;
