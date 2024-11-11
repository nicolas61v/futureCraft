import React from 'react';
import { Upload } from 'lucide-react';

export default function UploadSection() {
  const handleImageUpload = (event) => {
    // Lógica de subida de imagen
  };

  return (
    <div className="max-w-2xl mx-auto mb-16">
      <div className="border-2 border-dashed border-blue-500 rounded-lg p-8 text-center">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
          id="file-upload"
        />
        <label htmlFor="file-upload" className="cursor-pointer">
          <Upload className="w-12 h-12 mb-4 text-blue-400" />
          <span className="text-lg">Sube tu Artesanía</span>
        </label>
      </div>
    </div>
  )
}