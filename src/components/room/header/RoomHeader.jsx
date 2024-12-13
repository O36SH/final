import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRightIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { useSettings } from '../../../contexts/SettingsContext';
import RoomInfo from '../RoomInfo';
import RoomMembersList from '../RoomMembersList';
import RoomActions from './RoomActions';
import VoiceStageBar from '../voice/VoiceStageBar';
import { cn } from '../../../utils/styles';

function RoomHeader({ room, isOwner, onUpdateRole, onKickMember }) {
  const navigate = useNavigate();
  const { settings } = useSettings();
  const [showInfo, setShowInfo] = useState(false);
  const [showMembers, setShowMembers] = useState(false);
  const [showVoiceStage, setShowVoiceStage] = useState(false);

  return (
    <>
      <div className={cn(
        'fixed top-0 left-0 right-0 z-20',
        'border-b shadow-sm',
        settings.darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      )}>
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center justify-between h-16 px-4">
            <div className="flex items-center">
              <button
                onClick={() => navigate(-1)}
                className={cn(
                  'p-2 rounded-full',
                  settings.darkMode 
                    ? 'hover:bg-gray-700 text-gray-300' 
                    : 'hover:bg-gray-100 text-gray-600'
                )}
              >
                <ChevronRightIcon className="h-6 w-6" />
              </button>

              <button
                onClick={() => setShowInfo(true)}
                className="flex items-center mr-4"
              >
                <div className={cn(
                  'w-10 h-10 rounded-lg flex items-center justify-center',
                  settings.darkMode ? 'bg-gray-700' : 'bg-gray-100'
                )}>
                  <UserGroupIcon className={cn(
                    'w-6 h-6',
                    settings.darkMode ? 'text-gray-400' : 'text-gray-500'
                  )} />
                </div>
                <div className="mr-3">
                  <h2 className={cn(
                    'font-semibold',
                    settings.darkMode ? 'text-white' : 'text-gray-900'
                  )}>
                    {room.name}
                  </h2>
                  <div className="flex items-center">
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
              </button>
            </div>

            <RoomActions
              room={room}
              isOwner={isOwner}
              onShowMembers={() => setShowMembers(true)}
              onToggleVoiceStage={() => setShowVoiceStage(!showVoiceStage)}
              isVoiceStageOpen={showVoiceStage}
            />
          </div>
        </div>
      </div>

      <VoiceStageBar 
        room={room}
        isOpen={showVoiceStage}
      />

      {showInfo && (
        <RoomInfo
          room={room}
          onClose={() => setShowInfo(false)}
        />
      )}

      {showMembers && (
        <RoomMembersList
          isOpen={showMembers}
          onClose={() => setShowMembers(false)}
          members={room.members}
          isOwner={isOwner}
          onUpdateRole={onUpdateRole}
          onKickMember={onKickMember}
        />
      )}
    </>
  );
}

export default RoomHeader;