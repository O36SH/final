import React from 'react';
import { useSettings } from '../../../contexts/SettingsContext';
import { cn } from '../../../utils/styles';

function UserStatus({ status }) {
  const { settings } = useSettings();
  const isOnline = status === 'متصل';

  return (
    <div className="flex items-center">
      <span className={cn(
        'w-2 h-2 rounded-full mr-1',
        isOnline ? 'bg-green-500' : 'bg-gray-400'
      )} />
      <span className={cn(
        'text-sm',
        isOnline 
          ? 'text-green-500' 
          : settings.darkMode 
          ? 'text-gray-400' 
          : 'text-gray-500'
      )}>
        {status}
      </span>
    </div>
  );
}

export default UserStatus;