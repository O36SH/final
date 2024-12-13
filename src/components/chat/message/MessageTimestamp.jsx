import React from 'react';
import { useSettings } from '../../../contexts/SettingsContext';
import { formatMessageTime } from '../../../utils/messageGenerator';
import { cn } from '../../../utils/styles';

function MessageTimestamp({ timestamp, isOwnMessage }) {
  const { settings } = useSettings();

  return (
    <span className={cn(
      'text-xs block text-left mt-1',
      isOwnMessage 
        ? 'text-blue-100' 
        : settings.darkMode 
        ? 'text-gray-400' 
        : 'text-gray-500'
    )}>
      {formatMessageTime(timestamp)}
    </span>
  );
}

export default MessageTimestamp;