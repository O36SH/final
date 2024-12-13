import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSettings } from '../contexts/SettingsContext';
import ChatTabs from '../components/chat/ChatTabs';
import UserAvatar from '../components/UserAvatar';
import UserLevelDisplay from '../components/UserLevelDisplay';
import { cn } from '../utils/styles';

function Chats() {
  const navigate = useNavigate();
  const { settings } = useSettings();
  const [activeTab, setActiveTab] = useState('all');
  const [chats] = useState({
    direct: [
      { id: 1, name: "أحمد", lastMessage: "مرحباً، كيف حالك؟", time: "10:30", unread: 2, level: 5 },
      { id: 2, name: "محمد", lastMessage: "هل أنت جاهز للاجتماع؟", time: "09:15", unread: 0, level: 8 }
    ],
    rooms: [
      { id: 3, name: "غرفة التقنية", lastMessage: "شكراً جزيلاً", time: "أمس", unread: 0, level: 3 }
    ]
  });

  const tabs = [
    { id: 'all', label: 'عام' },
    { id: 'rooms', label: 'غرف' },
    { id: 'direct', label: 'خاص' }
  ];

  const getFilteredChats = () => {
    switch (activeTab) {
      case 'rooms':
        return chats.rooms;
      case 'direct':
        return chats.direct;
      default:
        return [...chats.direct, ...chats.rooms];
    }
  };

  const handleChatClick = (chatId, isRoom) => {
    navigate(isRoom ? `/rooms/${chatId}` : `/chats/${chatId}`);
  };

  return (
    <div className={settings.darkMode ? 'bg-gray-900 min-h-screen' : 'bg-gray-50 min-h-screen'}>
      <ChatTabs 
        activeTab={activeTab}
        onTabChange={setActiveTab}
        tabs={tabs}
      />

      <div className="max-w-screen-xl mx-auto">
        <div className={cn(
          'divide-y',
          settings.darkMode ? 'divide-gray-700' : 'divide-gray-200'
        )}>
          {getFilteredChats().map((chat) => (
            <div
              key={chat.id}
              onClick={() => handleChatClick(chat.id, activeTab === 'rooms')}
              className={cn(
                'flex items-center justify-between p-4 cursor-pointer',
                settings.darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'
              )}
            >
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <UserAvatar user={chat} />
                  {chat.unread > 0 && (
                    <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                      {chat.unread}
                    </span>
                  )}
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <UserLevelDisplay level={chat.level} />
                    <h3 className={cn(
                      'font-semibold',
                      settings.darkMode ? 'text-white' : 'text-gray-900'
                    )}>
                      {chat.name}
                    </h3>
                  </div>
                  <p className={cn(
                    'text-sm',
                    settings.darkMode ? 'text-gray-400' : 'text-gray-500'
                  )}>
                    {chat.lastMessage}
                  </p>
                </div>
              </div>
              <span className={cn(
                'text-sm',
                settings.darkMode ? 'text-gray-400' : 'text-gray-500'
              )}>
                {chat.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Chats;