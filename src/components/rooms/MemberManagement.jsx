```jsx
import React, { useState } from 'react';
import { useSettings } from '../../contexts/SettingsContext';
import { 
  ShieldCheckIcon,
  NoSymbolIcon,
  UserMinusIcon
} from '@heroicons/react/24/outline';
import { cn } from '../../utils/styles';

function MemberManagement({ member, isOwner, onUpdateRole, onKickMember }) {
  const { settings } = useSettings();
  const [showActions, setShowActions] = useState(false);

  const roles = [
    { id: 'member', label: 'عضو', icon: null },
    { id: 'moderator', label: 'مشرف', icon: ShieldCheckIcon },
    { id: 'admin', label: 'مسؤول', icon: ShieldCheckIcon }
  ];

  const handleRoleChange = (newRole) => {
    onUpdateRole(member.id, newRole);
    setShowActions(false);
  };

  const handleKick = () => {
    if (window.confirm(`هل أنت متأكد من طرد ${member.name}؟`)) {
      onKickMember(member.id);
      setShowActions(false);
    }
  };

  if (!isOwner) return null;

  return (
    <div className="relative">
      <button
        onClick={() => setShowActions(!showActions)}
        className={cn(
          'p-1 rounded-full transition-colors',
          settings.darkMode 
            ? 'hover:bg-gray-700 text-gray-400' 
            : 'hover:bg-gray-100 text-gray-600'
        )}
      >
        <ShieldCheckIcon className="w-5 h-5" />
      </button>

      {showActions && (
        <div className={cn(
          'absolute z-50 left-0 mt-2',
          'rounded-lg shadow-lg',
          'min-w-[160px]',
          settings.darkMode ? 'bg-gray-800' : 'bg-white',
          'border',
          settings.darkMode ? 'border-gray-700' : 'border-gray-200'
        )}>
          <div className="p-2">
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => handleRoleChange(role.id)}
                className={cn(
                  'w-full flex items-center px-3 py-2 rounded-md text-sm',
                  settings.darkMode 
                    ? 'hover:bg-gray-700 text-gray-300' 
                    : 'hover:bg-gray-100 text-gray-700'
                )}
              >
                {role.icon && <role.icon className="w-4 h-4 mr-2" />}
                {role.label}
              </button>
            ))}
            
            <div className={cn(
              'border-t my-1',
              settings.darkMode ? 'border-gray-700' : 'border-gray-200'
            )} />
            
            <button
              onClick={handleKick}
              className={cn(
                'w-full flex items-center px-3 py-2 rounded-md text-sm',
                'text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20'
              )}
            >
              <UserMinusIcon className="w-4 h-4 mr-2" />
              طرد العضو
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MemberManagement;
```