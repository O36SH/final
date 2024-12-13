import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSettings } from '../contexts/SettingsContext';
import { cn } from '../utils/styles';

function UserLink({ userId, name, children, className = '' }) {
  const navigate = useNavigate();
  const { settings } = useSettings();

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent event bubbling
    navigate(`/chats/${userId}`);
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        'text-right transition-colors',
        settings.darkMode 
          ? 'hover:text-blue-400 focus:text-blue-400' 
          : 'hover:text-blue-600 focus:text-blue-600',
        className
      )}
    >
      {children || (
        <div className="flex items-center space-x-2">
          <span className="font-medium">{name}</span>
        </div>
      )}
    </button>
  );
}

export default UserLink;