import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSettings } from '../../contexts/SettingsContext';
import { useAuth } from '../../contexts/AuthContext';
import { 
  UserCircleIcon, 
  Cog6ToothIcon, 
  ArrowRightOnRectangleIcon 
} from '@heroicons/react/24/outline';
import { cn } from '../../utils/styles';

function HeaderActions() {
  const navigate = useNavigate();
  const { settings } = useSettings();
  const { logout } = useAuth();

  const actions = [
    {
      icon: ArrowRightOnRectangleIcon,
      label: 'تسجيل الخروج',
      onClick: () => {
        logout();
        navigate('/login');
      },
      ariaLabel: 'تسجيل الخروج من الحساب'
    },
    {
      icon: Cog6ToothIcon,
      label: 'الإعدادات',
      onClick: () => navigate('/settings'),
      ariaLabel: 'فتح الإعدادات'
    },
    {
      icon: UserCircleIcon,
      label: 'الملف الشخصي',
      onClick: () => navigate('/profile'),
      ariaLabel: 'عرض الملف الشخصي'
    }
  ];

  return (
    <nav className="flex items-center gap-1">
      {actions.map((action, index) => (
        <button
          key={action.label}
          onClick={action.onClick}
          className={cn(
            'p-2 rounded-full transition-all',
            'hover:scale-105 active:scale-95',
            settings.darkMode
              ? 'text-gray-400 hover:text-white hover:bg-gray-700'
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
          )}
          title={action.label}
          aria-label={action.ariaLabel}
        >
          <action.icon className="h-6 w-6" />
        </button>
      ))}
    </nav>
  );
}

export default HeaderActions;