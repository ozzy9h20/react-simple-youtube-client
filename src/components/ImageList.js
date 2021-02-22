import React from 'react';
import ImageCard from './ImageCard';
import './imagesList.css';

function ImageList({ images }) {
  const imagesMapped = images.map((image) => {
    return (
      <ImageCard 
        key={image.id} 
        image={image}
      />
    );
  })

  return (
    <div className='image-list'>
      {imagesMapped}
    </div>
  );
}

export default ImageList;