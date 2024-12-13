import React from 'react';
import { useSettings } from '../../contexts/SettingsContext';
import { UserGroupIcon } from '@heroicons/react/24/outline';
import ContentCard from '../ContentCard';
import { formatRoomId } from '../../utils/roomGenerator';
import { cn } from '../../utils/styles';

function RoomsList({ title, rooms, onRoomClick, onRoomInfo }) {
  const { settings } = useSettings();

  if (rooms.length === 0) {
    return (
      <div className="mb-8">
        <h2 className={cn(
          'text-lg font-medium mb-4',
          settings.darkMode ? 'text-gray-200' : 'text-gray-700'
        )}>
          {title}
        </h2>
        <div className={cn(
          'text-center py-8',
          settings.darkMode ? 'text-gray-400' : 'text-gray-500'
        )}>
          لا توجد غرف حالياً
        </div>
      </div>
    );
  }

  return (
    <div className="mb-8">
      <h2 className={cn(
        'text-lg font-medium mb-4',
        settings.darkMode ? 'text-gray-200' : 'text-gray-700'
      )}>
        {title}
      </h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {rooms.map((room) => (
          <ContentCard key={room.id}>
            <div className="p-4">
              <div className="flex items-start space-x-4">
                <button
                  onClick={() => onRoomInfo(room)}
                  className={cn(
                    'w-16 h-16 rounded-lg overflow-hidden flex-shrink-0',
                    settings.darkMode ? 'bg-gray-700' : 'bg-gray-200',
                    'flex items-center justify-center hover:opacity-80 transition-opacity'
                  )}
                >
                  {room.image ? (
                    <img 
                      src={room.image} 
                      alt={room.name} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <UserGroupIcon className={cn(
                      'w-10 h-10',
                      settings.darkMode ? 'text-gray-500' : 'text-gray-400'
                    )} />
                  )}
                </button>
                <div className="flex-1">
                  <button
                    onClick={() => onRoomClick(room.id)}
                    className={cn(
                      'text-right hover:underline',
                      settings.darkMode ? 'text-white' : 'text-gray-900',
                      'font-semibold'
                    )}
                  >
                    {room.name}
                  </button>
                  <p className={cn(
                    'text-sm',
                    settings.darkMode ? 'text-gray-400' : 'text-gray-500'
                  )}>
                    {formatRoomId(room.id)}
                  </p>
                  <div className="flex items-center mt-2">
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
                  </div>
                </div>
              </div>
            </div>
          </ContentCard>
        ))}
      </div>
    </div>
  );
}

export default RoomsList;