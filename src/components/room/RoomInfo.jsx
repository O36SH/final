import React from 'react';
import { useSettings } from '../../contexts/SettingsContext';
import { 
  XMarkIcon, 
  CalendarIcon, 
  UserCircleIcon 
} from '@heroicons/react/24/outline';
import UserAvatar from '../UserAvatar';
import { cn } from '../../utils/styles';

function RoomInfo({ room, onClose }) {
  const { settings } = useSettings();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className={cn(
        'relative w-full max-w-md mx-4 rounded-lg shadow-xl',
        settings.darkMode ? 'bg-gray-800' : 'bg-white'
      )}>
        <button
          onClick={onClose}
          className={cn(
            'absolute top-4 left-4 p-2 rounded-full',
            settings.darkMode 
              ? 'hover:bg-gray-700 text-gray-400' 
              : 'hover:bg-gray-100 text-gray-600'
          )}
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        <div className="p-6">
          <div className="flex flex-col items-center">
            <div className={cn(
              'w-24 h-24 rounded-lg overflow-hidden',
              settings.darkMode ? 'bg-gray-700' : 'bg-gray-200',
              'flex items-center justify-center'
            )}>
              {room.image ? (
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <UserCircleIcon className={cn(
                  'w-16 h-16',
                  settings.darkMode ? 'text-gray-600' : 'text-gray-400'
                )} />
              )}
            </div>
            <h3 className={cn(
              'text-xl font-bold mt-4',
              settings.darkMode ? 'text-white' : 'text-gray-900'
            )}>
              {room.name}
            </h3>
            <p className={cn(
              'text-sm mt-2',
              settings.darkMode ? 'text-gray-400' : 'text-gray-500'
            )}>
              {room.description}
            </p>
          </div>

          <div className="mt-6 space-y-4">
            <div>
              <h4 className={cn(
                'text-sm font-medium mb-2',
                settings.darkMode ? 'text-gray-300' : 'text-gray-700'
              )}>
                مالك الغرفة
              </h4>
              <div className="flex items-center space-x-3">
                <UserAvatar user={room.owner} />
                <div>
                  <p className={cn(
                    'font-medium',
                    settings.darkMode ? 'text-white' : 'text-gray-900'
                  )}>
                    {room.owner.name}
                  </p>
                  <p className={cn(
                    'text-sm',
                    room.owner.isOnline ? 'text-green-500' : 'text-gray-500'
                  )}>
                    {room.owner.isOnline ? 'متصل' : 'غير متصل'}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <CalendarIcon className={cn(
                'w-5 h-5',
                settings.darkMode ? 'text-gray-400' : 'text-gray-500'
              )} />
              <span className={cn(
                'text-sm',
                settings.darkMode ? 'text-gray-400' : 'text-gray-600'
              )}>
                تم الإنشاء في {new Date(room.createdAt).toLocaleDateString('ar-SA')}
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <span className={cn(
                'inline-flex items-center text-sm',
                room.isActive ? 'text-green-500' : 'text-gray-500'
              )}>
                <span className={cn(
                  'w-2 h-2 rounded-full mr-1',
                  room.isActive ? 'bg-green-500' : 'bg-gray-500'
                )}></span>
                {room.isActive ? 'نشط' : 'غير نشط'}
              </span>
              <span className={cn(
                'mx-2 text-sm',
                settings.darkMode ? 'text-gray-600' : 'text-gray-300'
              )}>•</span>
              <span className={cn(
                'text-sm',
                settings.darkMode ? 'text-gray-400' : 'text-gray-500'
              )}>
                {room.members.length} عضو
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomInfo;