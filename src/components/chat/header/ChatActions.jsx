/**
 * مكون أزرار التحكم في المحادثة
 */
import React from 'react';
import { useSettings } from '../../../contexts/SettingsContext';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import { cn } from '../../../utils/styles';

function ChatActions() {
  const { settings } = useSettings();

  const actions = [
    { 
      icon: EllipsisVerticalIcon, 
      label: 'المزيد', 
      onClick: () => {
        // إظهار قائمة الخيارات الإضافية
        console.log('Show more options');
      } 
    }
  ];

  return (
    <div className="flex items-center gap-2">
      {actions.map(({ icon: Icon, label, onClick }) => (
        <button
          key={label}
          onClick={onClick}
          className={cn(
            'p-2 rounded-full',
            settings.darkMode 
              ? 'hover:bg-gray-700 text-gray-300' 
              : 'hover:bg-gray-100 text-gray-600'
          )}
          aria-label={label}
        >
          <Icon className="h-5 w-5" />
        </button>
      ))}
    </div>
  );
}

export default ChatActions;