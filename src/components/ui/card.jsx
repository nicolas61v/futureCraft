import React from 'react';
import { Printer } from 'lucide-react';

export function Card({ artwork }) {
  return (
    <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 backdrop-blur-lg">
      <img
        src={artwork.thumbnail}
        alt={artwork.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold">{artwork.name}</h3>
      <p className="text-blue-300">Por: {artwork.creator}</p>
      <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-2 rounded-lg mt-4">
        Imprimir Ahora
      </button>
    </div>
  )
}