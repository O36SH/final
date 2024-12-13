import React from 'react';
import { useSettings } from '../../contexts/SettingsContext';
import Logo from './Logo';
import HeaderActions from './HeaderActions';
import { cn } from '../../utils/styles';

function Header() {
  const { settings } = useSettings();

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50',
          'border-b shadow-sm',
          settings.darkMode 
            ? 'bg-gray-900 border-gray-800' 
            : 'bg-white border-gray-200',
          'safe-top'
        )}
      >
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Logo />
            <HeaderActions />
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-16 safe-top" />
    </>
  );
}

export default Header;