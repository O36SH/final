import React from 'react';
import { useSettings } from '../../../contexts/SettingsContext';
import { 
  MicrophoneIcon, 
  SpeakerWaveIcon,
  UserGroupIcon,
  LockClosedIcon,
  HandRaisedIcon,
  PaintBrushIcon
} from '@heroicons/react/24/outline';
import { cn } from '../../../utils/styles';

function VoiceStageSettings({ settings: voiceSettings, onUpdateSettings }) {
  const { settings } = useSettings();

  const settingsOptions = [
    {
      id: 'layout',
      label: 'تخطيط المنصة',
      icon: PaintBrushIcon,
      type: 'select',
      options: [
        { value: 'grid', label: 'شبكة' },
        { value: 'theater', label: 'مسرح' },
        { value: 'circle', label: 'دائري' }
      ]
    },
    {
      id: 'maxSpeakers',
      label: 'عدد المايكات',
      icon: MicrophoneIcon,
      type: 'select',
      options: [
        { value: '6', label: '6 مايكات' },
        { value: '8', label: '8 مايكات' },
        { value: '12', label: '12 مايك' }
      ]
    },
    {
      id: 'permissions',
      label: 'صلاحيات التحدث',
      icon: LockClosedIcon,
      type: 'select',
      options: [
        { value: 'all', label: 'الجميع' },
        { value: 'approved', label: 'موافقة المشرف' },
        { value: 'members', label: 'الأعضاء فقط' }
      ]
    },
    {
      id: 'raiseHand',
      label: 'طلب التحدث',
      icon: HandRaisedIcon,
      type: 'switch',
      description: 'السماح للمستخدمين بطلب الإذن للتحدث'
    },
    {
      id: 'autoMute',
      label: 'كتم تلقائي',
      icon: SpeakerWaveIcon,
      type: 'switch',
      description: 'كتم صوت المتحدثين الجدد تلقائياً'
    }
  ];

  return (
    <div className={cn(
      'border-t',
      settings.darkMode ? 'border-gray-700' : 'border-gray-200'
    )}>
      <div className="p-4 space-y-4">
        {settingsOptions.map((option) => (
          <div key={option.id} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <option.icon className={cn(
                  'w-5 h-5',
                  settings.darkMode ? 'text-gray-400' : 'text-gray-500'
                )} />
                <label className={cn(
                  'font-medium',
                  settings.darkMode ? 'text-white' : 'text-gray-900'
                )}>
                  {option.label}
                </label>
              </div>
              {option.type === 'select' && (
                <select
                  value={voiceSettings[option.id]}
                  onChange={(e) => onUpdateSettings(option.id, e.target.value)}
                  className={cn(
                    'rounded-md border',
                    settings.darkMode
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900',
                    'px-3 py-1.5 focus:ring-2 focus:ring-blue-500'
                  )}
                >
                  {option.options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              )}
              {option.type === 'switch' && (
                <button
                  onClick={() => onUpdateSettings(option.id, !voiceSettings[option.id])}
                  className={cn(
                    'relative inline-flex h-6 w-11 items-center rounded-full transition-colors',
                    voiceSettings[option.id]
                      ? 'bg-blue-600'
                      : settings.darkMode
                      ? 'bg-gray-600'
                      : 'bg-gray-200'
                  )}
                >
                  <span
                    className={cn(
                      'inline-block h-4 w-4 transform rounded-full bg-white transition-transform',
                      voiceSettings[option.id] ? 'translate-x-6' : 'translate-x-1'
                    )}
                  />
                </button>
              )}
            </div>
            {option.description && (
              <p className={cn(
                'text-sm',
                settings.darkMode ? 'text-gray-400' : 'text-gray-500'
              )}>
                {option.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default VoiceStageSettings;