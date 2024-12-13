import React from 'react';
import { useSettings } from '../../../contexts/SettingsContext';
import UserAvatar from '../../UserAvatar';
import MessageTimestamp from './MessageTimestamp';
import { cn } from '../../../utils/styles';

function MessageContainer({ message, isOwnMessage, user, children }) {
  const { settings } = useSettings();

  return (
    <div className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`flex ${isOwnMessage ? 'flex-row-reverse' : 'flex-row'} items-start max-w-[70%]`}>
        <div className={`${isOwnMessage ? 'mr-2' : 'ml-2'} flex-shrink-0`}>
          <UserAvatar 
            user={isOwnMessage ? { id: message.senderId } : user} 
            size="sm" 
            showPreview={!isOwnMessage} 
          />
        </div>
        <div className="flex flex-col">
          <div className={`flex items-center ${isOwnMessage ? 'flex-row-reverse' : 'flex-row'} mb-1`}>
            <span className={cn(
              'text-xs',
              settings.darkMode ? 'text-gray-400' : 'text-gray-500'
            )}>
              {isOwnMessage ? 'أنت' : user.name}
            </span>
          </div>
          <div className={cn(
            'rounded-lg px-4 py-2',
            isOwnMessage
              ? 'bg-blue-600 text-white'
              : settings.darkMode
              ? 'bg-gray-700 text-white'
              : 'bg-gray-100 text-gray-900'
          )}>
            {children}
            <MessageTimestamp timestamp={message.timestamp} isOwnMessage={isOwnMessage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageContainer;