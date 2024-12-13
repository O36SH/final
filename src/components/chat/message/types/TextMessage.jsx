import React from 'react';

function TextMessage({ content }) {
  // Ensure content is always rendered as string
  const messageText = typeof content === 'object' ? content.content : content;
  
  return (
    <span className="text-sm whitespace-pre-wrap break-words">
      {messageText}
    </span>
  );
}

export default TextMessage;