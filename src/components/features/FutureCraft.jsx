'use client';
import React, { useState } from 'react';
import { Upload, Printer, Sparkles } from 'lucide-react';
import Header from '../layout/Header';

export default function FutureCraft() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadedArtworks, setUploadedArtworks] = useState([
    {
      id: 1,
      name: "Vasija Ancestral Digital",
      creator: "María González",
      thumbnail: "https://picsum.photos/400/300?random=4",
      status: "available",
      price: "0.35 QC",
      downloads: "1.2K"
    },
    {
      id: 2,
      name: "Telar Moderno Cuántico",
      creator: "Juan Silva",
      thumbnail: "https://picsum.photos/400/300?random=5",
      status: "printing",
      price: "0.42 QC",
      downloads: "890"
    },
    {
      id: 3,
      name: "Escultura Neo-Ancestral",
      creator: "Ana Ramírez",
      thumbnail: "https://picsum.photos/400/300?random=6",
      status: "available",
      price: "0.38 QC",
      downloads: "2.1K"
    }
  ]);
  
  const [showPrintingAnimation, setShowPrintingAnimation] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
        setUploadedArtworks(prev => [...prev, {
          id: prev.length + 1,
          name: "Nueva Artesanía Digital",
          creator: "Usuario",
          thumbnail: e.target.result,
          status: "available",
          price: "0.30 QC",
          downloads: "0"
        }]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePrint = (artwork) => {
    setShowPrintingAnimation(true);
    setTimeout(() => {
      setShowPrintingAnimation(false);
      setUploadedArtworks(prev =>
        prev.map(art =>
          art.id === artwork.id
            ? { ...art, status: "printing" }
            : art
        )
      );
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-black text-white">
      <Header />
      <div className="p-8">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            Crea el Futuro Artesanal
          </h1>
          <p className="text-xl text-blue-300 mb-8">
            Materializa tus diseños al instante con tecnología cuántica
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:opacity-90 transition-opacity">
              Comenzar Ahora
            </button>
            <button className="px-8 py-3 border border-blue-500 rounded-lg hover:bg-blue-500/20 transition-colors">
              Ver Tutorial
            </button>
          </div>
        </div>

        {/* Upload Section */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="border-2 border-dashed border-blue-500 rounded-lg p-8 text-center hover:border-blue-400 transition-colors bg-gray-900/50 backdrop-blur-sm">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="cursor-pointer flex flex-col items-center"
            >
              <Upload className="w-16 h-16 mb-4 text-blue-400" />
              <span className="text-2xl mb-2 font-semibold">Sube tu Artesanía Digital</span>
              <span className="text-blue-300">
                Arrastra una imagen o haz clic para seleccionar
              </span>
            </label>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Galería de Artesanías Digitales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {uploadedArtworks.map((artwork) => (
              <div
                key={artwork.id}
                className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 hover:transform hover:scale-105 transition-all border border-blue-900/30"
              >
                <div className="relative mb-4 group">
                  <img
                    src={artwork.thumbnail}
                    alt={artwork.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  {artwork.status === "printing" ? (
                    <div className="absolute inset-0 bg-blue-900/75 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <Printer className="w-8 h-8 mb-2 mx-auto animate-bounce" />
                        <span>Imprimiendo...</span>
                      </div>
                    </div>
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-end justify-center pb-4">
                      <span className="text-white text-sm">{artwork.downloads} impresiones</span>
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{artwork.name}</h3>
                  <p className="text-blue-300">Por: {artwork.creator}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-emerald-400 font-medium">{artwork.price}</span>
                    <button
                      onClick={() => handlePrint(artwork)}
                      disabled={artwork.status === "printing"}
                      className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {artwork.status === "printing" ? "En Proceso" : "Imprimir Ahora"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Printing Animation Modal */}
        {showPrintingAnimation && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-gray-800/90 p-8 rounded-2xl text-center max-w-md mx-4">
              <Sparkles className="w-16 h-16 mx-auto mb-4 text-blue-400 animate-spin" />
              <h2 className="text-2xl font-bold mb-4">Iniciando Impresión Cuántica</h2>
              <p className="text-blue-300 mb-4">
                Materializando tu artesanía en tiempo real...
              </p>
              <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 animate-[progress_3s_ease-in-out_infinite]" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}