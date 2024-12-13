import React, { useState, useRef } from 'react';
import { PlayIcon, PauseIcon } from '@heroicons/react/24/solid';
import { useSettings } from '../../../../contexts/SettingsContext';
import { cn } from '../../../../utils/styles';

function AudioMessage({ content }) {
  const { settings } = useSettings();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={handlePlayPause}
        className={cn(
          'p-2 rounded-full',
          settings.darkMode ? 'bg-gray-600' : 'bg-gray-200',
          'hover:opacity-80 transition-opacity'
        )}
      >
        {isPlaying ? (
          <PauseIcon className="h-5 w-5 text-gray-100" />
        ) : (
          <PlayIcon className="h-5 w-5 text-gray-100" />
        )}
      </button>
      <audio
        ref={audioRef}
        src={content}
        onEnded={() => setIsPlaying(false)}
        className="hidden"
      />
      <div className={cn(
        'text-sm',
        settings.darkMode ? 'text-gray-300' : 'text-gray-600'
      )}>
        رسالة صوتية
      </div>
    </div>
  );
}

export default AudioMessage;