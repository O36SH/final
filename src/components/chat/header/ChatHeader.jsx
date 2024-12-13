/**
 * مكون رأس المحادثة
 * يعرض معلومات المستخدم الآخر وأزرار التحكم
 */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { useSettings } from '../../../contexts/SettingsContext';
import UserAvatar from '../../UserAvatar';
import UserStatus from './UserStatus';
import ChatActions from './ChatActions';
import { cn } from '../../../utils/styles';

function ChatHeader({ user }) {
  const navigate = useNavigate();
  const { settings } = useSettings();

  return (
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

            <div className="flex items-center mr-4">
              <UserAvatar user={user} size="md" />
              <div className="mr-3">
                <h2 className={cn(
                  'font-semibold',
                  settings.darkMode ? 'text-white' : 'text-gray-900'
                )}>
                  {user.name}
                </h2>
                <UserStatus status={user.status} />
              </div>
            </div>
          </div>

          <ChatActions />
        </div>
      </div>
    </div>
  );
}

export default ChatHeader;