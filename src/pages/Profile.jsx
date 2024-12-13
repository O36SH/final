import React, { useState } from 'react';
import { useSettings } from '../contexts/SettingsContext';
import BackButton from '../components/BackButton';
import ProfileSettings from '../components/profile/ProfileSettings';
import StatusUpdate from '../components/StatusUpdate';
import { cn } from '../utils/styles';

function Profile() {
  const { settings } = useSettings();
  const [isEditing, setIsEditing] = useState(false);
  const [userProfile, setUserProfile] = useState({
    name: "أحمد محمد",
    userId: "12345678",
    bio: "مطور تطبيقات ومهتم بالتكنولوجيا",
    location: "الرياض، المملكة العربية السعودية",
    joinDate: "انضم في يناير 2023",
    friends: 245,
    posts: 123,
    rooms: 5,
    status: "",
    gender: "",
    birthDate: "",
    interests: ["البرمجة", "التكنولوجيا", "القراءة", "السفر"]
  });

  const handleSaveProfile = (updatedData) => {
    setUserProfile(prev => ({
      ...prev,
      ...updatedData
    }));
    setIsEditing(false);
  };

  const handleUpdateStatus = (newStatus) => {
    setUserProfile(prev => ({
      ...prev,
      status: newStatus
    }));
  };

  return (
    <div className={cn(
      'min-h-screen',
      settings.darkMode ? 'bg-gray-900' : 'bg-gray-50'
    )}>
      <div className={cn(
        'sticky top-0 z-20',
        'border-b shadow-sm',
        settings.darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      )}>
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <BackButton />
              <h1 className={cn(
                'text-xl font-bold mr-4',
                settings.darkMode ? 'text-white' : 'text-gray-800'
              )}>
                الملف الشخصي
              </h1>
            </div>
            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className={cn(
                  'px-4 py-2 rounded-lg',
                  settings.darkMode
                    ? 'bg-blue-600 hover:bg-blue-700'
                    : 'bg-blue-500 hover:bg-blue-600',
                  'text-white'
                )}
              >
                تعديل الملف الشخصي
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <div className={cn(
          'rounded-lg shadow-sm overflow-hidden',
          settings.darkMode ? 'bg-gray-800' : 'bg-white'
        )}>
          {isEditing ? (
            <ProfileSettings 
              profile={userProfile}
              onSave={handleSaveProfile}
              onCancel={() => setIsEditing(false)}
            />
          ) : (
            <div className="p-6">
              <StatusUpdate 
                currentStatus={userProfile.status}
                onUpdateStatus={handleUpdateStatus}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;