import React, { useState } from 'react';
import { useSettings } from '../../../contexts/SettingsContext';
import { useVoiceStageSettings } from '../../../hooks/useVoiceStageSettings';
import { Cog6ToothIcon } from '@heroicons/react/24/outline';
import VoiceStage from './VoiceStage';
import VoiceStageSettings from './VoiceStageSettings';
import { cn } from '../../../utils/styles';

function VoiceStageBar({ room, isOpen }) {
  const { settings } = useSettings();
  const { settings: voiceSettings, updateSettings } = useVoiceStageSettings();
  const [showSettings, setShowSettings] = useState(false);

  if (!isOpen) return null;

  return (
    <div className={cn(
      'fixed top-16 left-0 right-0 z-10',
      'border-b shadow-sm',
      settings.darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
    )}>
      <div className="max-w-screen-xl mx-auto">
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className={cn(
              'text-lg font-semibold',
              settings.darkMode ? 'text-white' : 'text-gray-900'
            )}>
              المنصة الصوتية
            </h3>
            <button
              onClick={() => setShowSettings(!showSettings)}
              className={cn(
                'p-2 rounded-full transition-colors',
                settings.darkMode 
                  ? 'hover:bg-gray-700 text-gray-400' 
                  : 'hover:bg-gray-100 text-gray-600'
              )}
            >
              <Cog6ToothIcon className="w-5 h-5" />
            </button>
          </div>

          <VoiceStage room={room} settings={voiceSettings} />
        </div>

        {showSettings && (
          <VoiceStageSettings 
            settings={voiceSettings}
            onUpdateSettings={updateSettings}
          />
        )}
      </div>
    </div>
  );
}

export default VoiceStageBar;