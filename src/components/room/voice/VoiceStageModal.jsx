import React from 'react';
import { useSettings } from '../../../contexts/SettingsContext';
import { XMarkIcon } from '@heroicons/react/24/outline';
import VoiceStage from './VoiceStage';
import { cn } from '../../../utils/styles';

function VoiceStageModal({ isOpen, onClose, room }) {
  const { settings } = useSettings();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className={cn(
        'relative w-full max-w-4xl mx-4 rounded-lg shadow-xl',
        settings.darkMode ? 'bg-gray-800' : 'bg-white'
      )}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h3 className={cn(
            'text-lg font-semibold',
            settings.darkMode ? 'text-white' : 'text-gray-900'
          )}>
            المنصة الصوتية
          </h3>
          <button
            onClick={onClose}
            className={cn(
              'p-2 rounded-full',
              settings.darkMode 
                ? 'hover:bg-gray-700 text-gray-400' 
                : 'hover:bg-gray-100 text-gray-600'
            )}
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        <div className="p-4">
          <VoiceStage room={room} />
        </div>
      </div>
    </div>
  );
}

export default VoiceStageModal;