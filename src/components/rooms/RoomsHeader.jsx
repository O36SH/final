import React from 'react';
import { useSettings } from '../../contexts/SettingsContext';
import { 
  MagnifyingGlassIcon, 
  PlusIcon,
  SparklesIcon 
} from '@heroicons/react/24/outline';
import HeaderUserAvatar from '../header/UserAvatar';
import { cn } from '../../utils/styles';

function RoomsHeader({ onCreateRoom, onShowDiscovery, currentUser }) {
  const { settings } = useSettings();

  return (
    <>
      <header className={cn(
        'fixed top-0 left-0 right-0 z-50',
        'border-b shadow-sm',
        settings.darkMode 
          ? 'bg-gray-900 border-gray-800' 
          : 'bg-white border-gray-200'
      )}>
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <HeaderUserAvatar user={currentUser} />
            
            <div className="flex items-center gap-2">
              <button
                onClick={onShowDiscovery}
                className={cn(
                  'p-2 rounded-full transition-colors',
                  settings.darkMode
                    ? 'bg-gray-800 hover:bg-gray-700'
                    : 'bg-gray-100 hover:bg-gray-200',
                  'text-blue-500'
                )}
                aria-label="اكتشاف الغرف النشطة"
              >
                <SparklesIcon className="h-5 w-5" />
              </button>

              <button
                onClick={onShowDiscovery}
                className={cn(
                  'p-2 rounded-full transition-colors',
                  settings.darkMode
                    ? 'bg-gray-800 hover:bg-gray-700'
                    : 'bg-gray-100 hover:bg-gray-200'
                )}
                aria-label="البحث في الغرف"
              >
                <MagnifyingGlassIcon className="h-5 w-5" />
              </button>

              <button
                onClick={onCreateRoom}
                className={cn(
                  'p-2 rounded-full transition-colors',
                  settings.darkMode
                    ? 'bg-blue-600 hover:bg-blue-700'
                    : 'bg-blue-500 hover:bg-blue-600',
                  'text-white'
                )}
                aria-label="إنشاء غرفة"
              >
                <PlusIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-16" />
    </>
  );
}

export default RoomsHeader;