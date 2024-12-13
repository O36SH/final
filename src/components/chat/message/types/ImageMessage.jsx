import React from 'react';

function ImageMessage({ content }) {
  return (
    <img 
      src={content} 
      alt="Shared" 
      className="max-w-sm rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
      onClick={() => window.open(content, '_blank')}
      loading="lazy"
    />
  );
}

export default ImageMessage;