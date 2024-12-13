import React from 'react';
import { useSettings } from '../../contexts/SettingsContext';
import MessageContainer from './message/MessageContainer';
import MessageContent from './message/MessageContent';

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