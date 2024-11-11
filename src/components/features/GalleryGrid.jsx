import React from 'react';
import { Card } from '../ui/card';

export default function GalleryGrid() {
  const [artworks, setArtworks] = React.useState([]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {artworks.map((artwork) => (
        <Card key={artwork.id} artwork={artwork} />
      ))}
    </div>
  )
}