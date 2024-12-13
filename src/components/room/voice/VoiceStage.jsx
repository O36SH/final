import React, { useState } from 'react';
import { useSettings } from '../../../contexts/SettingsContext';
import { MicrophoneIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import UserAvatar from '../../UserAvatar';
import { cn } from '../../../utils/styles';

/**
 * مكون المنصة الصوتية
 * يعرض المايكات في شريط أفقي
 */
function VoiceStage({ room }) {
  const { settings } = useSettings();
  const [slots, setSlots] = useState(Array(6).fill(null));
  const [activeSlot, setActiveSlot] = useState(null);
  const [listenerCount, setListenerCount] = useState(12);

  const handleJoinStage = async (slotIndex) => {
    setSlots(prev => {
      const newSlots = [...prev];
      newSlots[slotIndex] = {
        userId: "12345678",
        name: "أنت",
        isSpeaking: false,
        isMuted: true
      };
      return newSlots;
    });
    setActiveSlot(slotIndex);
  };

  const handleLeaveStage = (slotIndex) => {
    setSlots(prev => {
      const newSlots = [...prev];
      newSlots[slotIndex] = null;
      return newSlots;
    });
    setActiveSlot(null);
  };

  return (
    <div className="w-full p-4">
      {/* شريط المايكات الأفقي */}
      <div className="flex items-center gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {slots.map((slot, index) => (
          <div
            key={index}
            className="flex-shrink-0"
          >
            {slot ? (
              <div className="relative group">
                <div className={cn(
                  'w-20 h-20 rounded-lg overflow-hidden',
                  slot.isSpeaking && !slot.isMuted
                    ? 'ring-2 ring-green-500'
                    : settings.darkMode
                    ? 'ring-1 ring-gray-600'
                    : 'ring-1 ring-gray-200'
                )}>
                  <UserAvatar 
                    user={{ id: slot.userId, name: slot.name }} 
                    size="lg" 
                  />
                </div>
                {activeSlot === index && (
                  <button
                    onClick={() => handleLeaveStage(index)}
                    className={cn(
                      'absolute -top-1 -right-1 w-5 h-5',
                      'bg-red-500 text-white rounded-full',
                      'hover:bg-red-600',
                      'opacity-0 group-hover:opacity-100 transition-opacity'
                    )}
                  >
                    ✕
                  </button>
                )}
                <span className={cn(
                  'mt-1 text-sm font-medium text-center block truncate',
                  settings.darkMode ? 'text-gray-300' : 'text-gray-700'
                )}>
                  {slot.name}
                </span>
              </div>
            ) : (
              <button
                onClick={() => handleJoinStage(index)}
                className={cn(
                  'w-20 h-20 rounded-lg flex items-center justify-center',
                  'transition-all transform hover:scale-105',
                  settings.darkMode
                    ? 'bg-gray-700 hover:bg-gray-600'
                    : 'bg-gray-100 hover:bg-gray-200'
                )}
              >
                <MicrophoneIcon className={cn(
                  'w-6 h-6',
                  settings.darkMode ? 'text-gray-400' : 'text-gray-500'
                )} />
              </button>
            )}
          </div>
        ))}
      </div>

      {/* عدد المستمعين */}
      <div className={cn(
        'flex items-center justify-center mt-4',
        settings.darkMode ? 'text-gray-400' : 'text-gray-600'
      )}>
        <UserGroupIcon className="w-5 h-5 ml-2" />
        <span className="text-sm">{listenerCount} مستمع</span>
      </div>
    </div>
  );
}

export default VoiceStage;