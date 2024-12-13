import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { useSettings } from '../contexts/SettingsContext';
import UserProfilePreview from './UserProfilePreview';
import { cn } from '../utils/styles';

function UserAvatar({ user, size = 'md', showPreview = true, onClick }) {
  const navigate = useNavigate();
  const { settings } = useSettings();
  const [showProfilePreview, setShowProfilePreview] = useState(false);

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const handleAvatarClick = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    if (onClick) {
      onClick(e);
    } else if (showPreview) {
      setShowProfilePreview(true);
    }
  };

  const handleChat = () => {
    navigate(`/chats/${user.id}`);
    setShowProfilePreview(false);
  };

  return (
    <div className="relative">
      <button
        onClick={handleAvatarClick}
        className={cn(
          sizeClasses[size],
          'rounded-full overflow-hidden',
          'transition-transform hover:scale-105',
          settings.darkMode ? 'bg-gray-700' : 'bg-gray-200'
        )}
      >
        {user.avatar ? (
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

      {showProfilePreview && showPreview && (
        <UserProfilePreview
          user={user}
          onClose={() => setShowProfilePreview(false)}
          onChat={handleChat}
        />
      )}
    </div>
  );
}

export default UserAvatar;