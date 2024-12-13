import React from 'react';
import { MessageType } from '../../../utils/messageTypes';
import TextMessage from './types/TextMessage';
import ImageMessage from './types/ImageMessage';
import AudioMessage from './types/AudioMessage';

function MessageContent({ message }) {
  const getMessageContent = () => {
    switch (message.type) {
      case MessageType.IMAGE:
        return <ImageMessage content={message.content} />;
      case MessageType.AUDIO:
        return <AudioMessage content={message.content} />;
      case MessageType.TEXT:
      default:
        return <TextMessage content={message.content} />;
    }
  };

  return getMessageContent();
}

export default MessageContent;