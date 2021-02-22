import React from 'react';

function ImageList({ images }) {
  const imagesMapped = images.map(({ id, alt_description, urls }) => {
    return (
      <img 
        key={id} 
        alt={alt_description} 
        src={urls.small} 
      />
    );
  })

  return (
    <div>
      {imagesMapped}
    </div>
  );
}

export default ImageList;