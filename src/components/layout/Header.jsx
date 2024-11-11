'use client';
import React from 'react';
import { ShoppingCart, Printer, Sparkles, History } from 'lucide-react';

const Header = () => {
  const popularPrints = [
    {
      id: 1,
      name: "Vasija Maya Digital",
      price: "0.35 QC",
      downloads: "1.2K",
      image: "https://picsum.photos/150/150?random=1" // URL de Picsum
    },
    {
      id: 2,
      name: "Tejido Andino AR",
      price: "0.28 QC",
      downloads: "890",
      image: "https://picsum.photos/150/150?random=2"
    },
    {
      id: 3,
      name: "Talla Africana Neo",
      price: "0.42 QC",
      downloads: "2.1K",
      image: "https://picsum.photos/150/150?random=3"
    }
  ];

  return (
    <header className="bg-gray-900 bg-opacity-80 backdrop-blur-lg border-b border-blue-900/30">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Printer className="w-8 h-8 text-blue-400" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              FutureCraft
            </span>
          </div>
          
          <div className="flex items-center space-x-8">
            <a href="#explore" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Sparkles className="w-5 h-5" />
              <span>Explorar</span>
            </a>
            <a href="#prints" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <History className="w-5 h-5" />
              <span>Mis Impresiones</span>
            </a>
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
              <ShoppingCart className="w-5 h-5" />
              <span>Carrito (3)</span>
            </button>
          </div>
        </div>
      </nav>

      <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-blue-300">Impresiones Populares</h2>
            <a href="#all" className="text-blue-400 hover:text-blue-300 text-sm">Ver todas</a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularPrints.map((print) => (
              <div key={print.id} className="flex items-center gap-4 bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition-colors">
                <img 
                  src={print.image} 
                  alt={print.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-medium text-white">{print.name}</h3>
                  <p className="text-sm text-blue-300">{print.price}</p>
                  <p className="text-xs text-gray-400">{print.downloads} descargas</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;