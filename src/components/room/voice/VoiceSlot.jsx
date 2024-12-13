import React from 'react';
import { useSettings } from '../../../contexts/SettingsContext';
import { MicrophoneIcon, SpeakerWaveIcon } from '@heroicons/react/24/outline';
import UserAvatar from '../../UserAvatar';
import { cn } from '../../../utils/styles';

/**
 * مكون فتحة المايك
 * يمثل مكان المتحدث في المنصة الصوتية
 * @param {Object} slot - معلومات الفتحة
 * @param {boolean} isActive - هل الفتحة نشطة
 * @param {Function} onJoin - معالج الانضمام
 * @param {Function} onLeave - معالج المغادرة
 */
function VoiceSlot({ slot, isActive, onJoin, onLeave }) {
  const { settings } = useSettings();

  // إذا كانت الفتحة فارغة، اعرض زر الانضمام
  if (!slot) {
    return (
      <button
        onClick={onJoin}
        className={cn(
          'w-full aspect-square flex items-center justify-center rounded-lg transition-all',
          'transform hover:scale-105',
          settings.darkMode
            ? 'bg-gray-700 hover:bg-gray-600'
            : 'bg-gray-100 hover:bg-gray-200',
          'shadow-sm'
        )}
      >
        <MicrophoneIcon className={cn(
          'w-4 h-4',
          settings.darkMode ? 'text-gray-400' : 'text-gray-500'
        )} />
      </button>
    );
  }

  // إذا كانت الفتحة مشغولة، اعرض معلومات المتحدث
  return (
    <div className="relative group">
      {/* صورة المستخدم */}
      <div className={cn(
        'relative aspect-square rounded-lg overflow-hidden',
        slot.isSpeaking && !slot.isMuted
          ? 'ring-1 ring-green-500'
          : settings.darkMode
          ? 'ring-1 ring-gray-600'
          : 'ring-1 ring-gray-200'
      )}>
        <UserAvatar 
          user={{ id: slot.userId, name: slot.name }} 
          size="sm" 
        />
        {/* تأثير التحدث */}
        {slot.isSpeaking && !slot.isMuted && (
          <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent" />
        )}
      </div>

      {/* مؤشر التحدث */}
      {slot.isSpeaking && !slot.isMuted && (
        <div className="absolute -bottom-1 right-0 w-3 h-3 bg-green-500 rounded-full flex items-center justify-center">
          <SpeakerWaveIcon className="w-2 h-2 text-white" />
        </div>
      )}

      {/* زر المغادرة */}
      {isActive && (
        <button
          onClick={onLeave}
          className={cn(
            'absolute -top-1 -right-1 w-3 h-3',
            'bg-red-500 text-white rounded-full',
            'hover:bg-red-600',
            'flex items-center justify-center',
            'opacity-0 group-hover:opacity-100 transition-opacity',
            'text-[10px]'
          )}
        >
          ✕
        </button>
      )}

      {/* اسم المستخدم */}
      <span className={cn(
        'mt-1 text-[10px] font-medium truncate w-full text-center block',
        settings.darkMode ? 'text-gray-400' : 'text-gray-600'
      )}>
        {slot.name}
      </span>
    </div>
  );
}

export default VoiceSlot;