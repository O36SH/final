import { useState } from 'react';

export function useVoiceStageSettings() {
  const [settings, setSettings] = useState({
    layout: 'grid',
    maxSpeakers: '6',
    permissions: 'all',
    raiseHand: true,
    autoMute: true
  });

  const updateSettings = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return {
    settings,
    updateSettings
  };
}