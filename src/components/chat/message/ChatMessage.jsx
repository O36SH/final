import React from 'react';
import MessageContainer from './MessageContainer';
import MessageContent from './MessageContent';

function ChatMessage({ message, isOwnMessage, user }) {
  return (
    <MessageContainer 
      message={message}
      isOwnMessage={isOwnMessage}
      user={user}
    >
      <MessageContent message={message} isOwnMessage={isOwnMessage} />
    </MessageContainer>
  );
}

export default ChatMessage;