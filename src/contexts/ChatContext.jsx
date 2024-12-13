import React, { createContext, useContext, useState, useEffect } from 'react';
import { generateMessageId } from '../utils/messageGenerator';
import { normalizeMessage } from '../utils/messageNormalizer';

const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [directMessages, setDirectMessages] = useState(() => {
    const savedMessages = localStorage.getItem('directMessages');
    return savedMessages ? JSON.parse(savedMessages) : {};
  });

  const [roomMessages, setRoomMessages] = useState(() => {
    const savedRoomMessages = localStorage.getItem('roomMessages');
    return savedRoomMessages ? JSON.parse(savedRoomMessages) : {};
  });

  useEffect(() => {
    localStorage.setItem('directMessages', JSON.stringify(directMessages));
    localStorage.setItem('roomMessages', JSON.stringify(roomMessages));
  }, [directMessages, roomMessages]);

  const sendDirectMessage = (recipientId, messageData) => {
    const newMessage = {
      id: generateMessageId(),
      senderId: '12345678', // Current user ID
      ...normalizeMessage(messageData),
      timestamp: new Date().toISOString(),
    };

    setDirectMessages(prev => ({
      ...prev,
      [recipientId]: [...(prev[recipientId] || []), newMessage],
    }));
  };

  const sendRoomMessage = (roomId, messageData) => {
    const newMessage = {
      id: generateMessageId(),
      senderId: '12345678', // Current user ID
      ...normalizeMessage(messageData),
      timestamp: new Date().toISOString(),
    };

    setRoomMessages(prev => ({
      ...prev,
      [roomId]: [...(prev[roomId] || []), newMessage],
    }));
  };

  return (
    <ChatContext.Provider value={{
      directMessages,
      roomMessages,
      sendDirectMessage,
      sendRoomMessage
    }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
}