import React, { useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import { cn } from '../../../utils/styles';

function MessageList({ messages, currentUserId, recipient }) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto mt-32">
      <div className="max-w-screen-xl mx-auto px-4 py-4 pb-32">
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message}
            isOwnMessage={message.senderId === currentUserId}
            user={recipient}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}

export default MessageList;