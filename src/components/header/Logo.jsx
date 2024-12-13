import React from 'react';
import { Link } from 'react-router-dom';
import { useSettings } from '../../contexts/SettingsContext';
import { cn } from '../../utils/styles';

function Logo() {
  const { settings } = useSettings();
  
  return (
    <Link 
      to="/"
      className={cn(
        'flex items-center space-x-2',
        'transition-opacity hover:opacity-80'
      )}
    >
      <img 
        src="/thirst.svg" 
        alt="عطش" 
        className="h-8 w-8"
        loading="eager"
      />
      <h1 className={cn(
        'text-xl font-bold',
        settings.darkMode ? 'text-white' : 'text-gray-800'
      )}>
        عطش
      </h1>
    </Link>
  );
}

export default Logo;