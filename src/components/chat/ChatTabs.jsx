import React from 'react';
import { useSettings } from '../../contexts/SettingsContext';
import { cn } from '../../utils/styles';

function ChatTabs({ activeTab, onTabChange, tabs }) {
  const { settings } = useSettings();

  return (
    <div className={cn(
      'sticky top-0 z-20',
      'border-b',
      settings.darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
    )}>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex w-full">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                'flex-1 py-4 text-center transition-colors relative',
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
    </div>
  );
}

export default ChatTabs;