import React from 'react';
import { useSettings } from '../../../contexts/SettingsContext';
import { 
  MicrophoneIcon, 
  PhoneXMarkIcon,
  SpeakerWaveIcon
} from '@heroicons/react/24/outline';
import { cn } from '../../../utils/styles';

/**
 * مكون أزرار التحكم في المنصة الصوتية
 * يتيح للمستخدم التحكم في المايك والمغادرة
 * @param {boolean} isMuted - حالة كتم الصوت
 * @param {boolean} isSpeaking - حالة التحدث
 * @param {Function} onToggleMute - معالج تبديل كتم الصوت
 * @param {Function} onLeaveStage - معالج مغادرة المنصة
 */
function VoiceStageControls({ isMuted, isSpeaking, onToggleMute, onLeaveStage }) {
  const { settings } = useSettings();

  return (
    <div className="flex gap-2">
      {/* زر كتم/تشغيل المايك */}
      <button
        onClick={onToggleMute}
        className={cn(
          'p-2 rounded-full',
          isMuted
            ? 'bg-red-500 hover:bg-red-600'
            : settings.darkMode
            ? 'bg-gray-700 hover:bg-gray-600'
            : 'bg-gray-100 hover:bg-gray-200',
          'transition-colors'
        )}
      >
        {isSpeaking && !isMuted ? (
          <SpeakerWaveIcon className="w-4 h-4 text-green-500" />
        ) : (
          <MicrophoneIcon className={cn(
            'w-4 h-4',
            isMuted ? 'text-white' : 'text-gray-500'
          )} />
        )}
      </button>

      {/* زر مغادرة المنصة */}
      <button
        onClick={onLeaveStage}
        className="p-2 rounded-full bg-red-500 hover:bg-red-600 text-white transition-colors"
      >
        <PhoneXMarkIcon className="w-4 h-4" />
      </button>
    </div>
  );
}

export default VoiceStageControls;