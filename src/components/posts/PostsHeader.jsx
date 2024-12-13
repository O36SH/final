import React from 'react';
import { useSettings } from '../../contexts/SettingsContext';
import { cn } from '../../utils/styles';

function PostsHeader({ activeTab, onTabChange, tabs }) {
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
        <div className="max-w-screen-xl mx-auto">
          {/* Search Bar */}
          <div className="px-4 py-3">
            <input
              type="text"
              placeholder="ابحث في المنشورات..."
              className={cn(
                'w-full px-4 py-2 rounded-lg border',
                settings.darkMode
                  ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400'
                  : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500',
                'focus:ring-2 focus:ring-blue-500'
              )}
            />
          </div>

          {/* Tabs */}
          <div className="flex w-full">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={cn(
                  'flex-1 py-3 text-center transition-colors relative',
                  activeTab === tab.id
                    ? settings.darkMode
                      ? 'text-white'
                      : 'text-blue-600'
                    : settings.darkMode
                    ? 'text-gray-400 hover:text-gray-300'
                    : 'text-gray-600 hover:text-gray-900'
                )}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div className={cn(
                    'absolute bottom-0 left-0 right-0 h-0.5',
                    settings.darkMode ? 'bg-blue-500' : 'bg-blue-600'
                  )} />
                )}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-[108px]" />
    </>
  );
}

export default PostsHeader;