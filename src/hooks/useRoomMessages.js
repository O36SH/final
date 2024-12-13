import { useState, useCallback } from 'react';
import { generateMessageId } from '../utils/messageGenerator';
import { CURRENT_USER_ID } from '../utils/constants';

export function useRoomMessages(roomId) {
  const [messages, setMessages] = useState([]);

  const sendMessage = useCallback((content) => {
    const newMessage = {
      id: generateMessageId(),
      senderId: CURRENT_USER_ID,
      content,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, newMessage]);
  }, []);

  return { messages, sendMessage };
}