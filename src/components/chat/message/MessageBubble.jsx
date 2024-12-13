import React from 'react';
import { useSettings } from '../../../contexts/SettingsContext';
import { cn } from '../../../utils/styles';

function MessageBubble({ children, isOwnMessage }) {
  const { settings } = useSettings();

  return (
    <div className={cn(
      'rounded-lg px-4 py-2',
      isOwnMessage
        ? 'bg-blue-600 text-white'
        : settings.darkMode
        ? 'bg-gray-700 text-white'
        : 'bg-gray-100 text-gray-900'
    )}>
      {children}
    </div>
  );
}

export default MessageBubble;