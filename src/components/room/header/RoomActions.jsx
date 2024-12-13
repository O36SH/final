import React, { useState } from 'react';
import { useSettings } from '../../../contexts/SettingsContext';
import { 
  UserGroupIcon,
  Cog6ToothIcon,
  MicrophoneIcon
} from '@heroicons/react/24/outline';
import { cn } from '../../../utils/styles';

function RoomActions({ room, isOwner, onShowMembers, onToggleVoiceStage, isVoiceStageOpen }) {
  const { settings } = useSettings();

  const actions = [
    { 
      icon: UserGroupIcon, 
      label: 'الأعضاء', 
      onClick: onShowMembers 
    },
    { 
      icon: MicrophoneIcon, 
      label: 'المنصة الصوتية', 
      onClick: onToggleVoiceStage,
      active: isVoiceStageOpen
    },
    ...(isOwner ? [{
      icon: Cog6ToothIcon,
      label: 'الإعدادات',
      onClick: () => {}
    }] : [])
  ];

  return (
    <div className="flex items-center gap-2">
      {actions.map(({ icon: Icon, label, onClick, active }) => (
        <button
          key={label}
          onClick={onClick}
          className={cn(
            'p-2 rounded-full transition-colors',
            active
              ? settings.darkMode
                ? 'bg-gray-700 text-blue-400'
                : 'bg-gray-100 text-blue-600'
              : settings.darkMode 
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

export default RoomActions;