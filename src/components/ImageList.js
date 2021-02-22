import React from 'react';

function ImageList({ images }) {
  const imagesMapped = images.map((image) => {
    return <img alt={image.alt_description} src={image.urls.small} />
  })

  return (
    <div>
      {imagesMapped}
    </div>
  );
}

export default ImageList;