import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { useSettings } from '../../contexts/SettingsContext';
import { cn } from '../../utils/styles';

function HeaderUserAvatar({ user }) {
  const navigate = useNavigate();
  const { settings } = useSettings();

  return (
    <button
      onClick={() => navigate('/profile')}
      className={cn(
        'relative w-10 h-10 rounded-full overflow-hidden',
        'transition-transform hover:scale-105',
        settings.darkMode ? 'bg-gray-700' : 'bg-gray-200'
      )}
      aria-label="الملف الشخصي"
    >
      {user?.avatar ? (
        <img
          src={user.avatar}
          alt={user.name}
          className="w-full h-full object-cover"
        />
      ) : (
        <UserCircleIcon className={cn(
          'w-full h-full',
          settings.darkMode ? 'text-gray-500' : 'text-gray-400'
        )} />
      )}
    </button>
  );
}

export default HeaderUserAvatar;