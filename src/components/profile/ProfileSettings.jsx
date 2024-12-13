import React, { useState } from 'react';
import { useSettings } from '../../contexts/SettingsContext';
import { 
  UserCircleIcon,
  MapPinIcon,
  CalendarIcon,
  TagIcon,
  UserIcon,
  CakeIcon
} from '@heroicons/react/24/outline';
import ImageUpload from '../common/ImageUpload';
import { cn } from '../../utils/styles';

function ProfileSettings({ profile, onSave, onCancel }) {
  const { settings } = useSettings();
  const [formData, setFormData] = useState({
    name: profile.name || '',
    bio: profile.bio || '',
    location: profile.location || '',
    gender: profile.gender || '',
    birthDate: profile.birthDate || '',
    interests: profile.interests || [],
    newInterest: '',
    avatar: profile.avatar || null,
    coverImage: profile.coverImage || null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddInterest = (e) => {
    e.preventDefault();
    if (formData.newInterest.trim() && !formData.interests.includes(formData.newInterest.trim())) {
      setFormData(prev => ({
        ...prev,
        interests: [...prev.interests, prev.newInterest.trim()],
        newInterest: ''
      }));
    }
  };

  const handleRemoveInterest = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.filter(i => i !== interest)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitData = { ...formData };
    delete submitData.newInterest;
    onSave(submitData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="relative">
        <div className={cn(
          'h-32 bg-gradient-to-r from-blue-500 to-blue-600',
          'rounded-t-lg overflow-hidden'
        )}>
          <ImageUpload
            currentImage={formData.coverImage}
            onImageChange={(image) => setFormData(prev => ({ ...prev, coverImage: image }))}
            onImageRemove={() => setFormData(prev => ({ ...prev, coverImage: null }))}
            className="absolute left-4 top-4"
            size="sm"
          />
        </div>
        <div className="flex justify-center">
          <div className="-mt-16 relative">
            <ImageUpload
              currentImage={formData.avatar}
              onImageChange={(image) => setFormData(prev => ({ ...prev, avatar: image }))}
              onImageRemove={() => setFormData(prev => ({ ...prev, avatar: null }))}
              size="lg"
              shape="round"
              className="border-4 border-white dark:border-gray-800"
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className={cn(
            'block text-sm font-medium mb-2',
            settings.darkMode ? 'text-gray-200' : 'text-gray-700'
          )}>
            الاسم
          </label>
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={cn(
                'w-full px-4 py-2 rounded-lg border',
                settings.darkMode
                  ? 'bg-gray-700 border-gray-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900',
                'focus:ring-2 focus:ring-blue-500'
              )}
            />
            <UserIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div>
          <label className={cn(
            'block text-sm font-medium mb-2',
            settings.darkMode ? 'text-gray-200' : 'text-gray-700'
          )}>
            نبذة تعريفية
          </label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            rows="3"
            className={cn(
              'w-full px-4 py-2 rounded-lg border',
              settings.darkMode
                ? 'bg-gray-700 border-gray-600 text-white'
                : 'bg-white border-gray-300 text-gray-900',
              'focus:ring-2 focus:ring-blue-500'
            )}
          />
        </div>

        <div>
          <label className={cn(
            'block text-sm font-medium mb-2',
            settings.darkMode ? 'text-gray-200' : 'text-gray-700'
          )}>
            الموقع
          </label>
          <div className="relative">
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className={cn(
                'w-full px-4 py-2 rounded-lg border',
                settings.darkMode
                  ? 'bg-gray-700 border-gray-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900',
                'focus:ring-2 focus:ring-blue-500'
              )}
            />
            <MapPinIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div>
          <label className={cn(
            'block text-sm font-medium mb-2',
            settings.darkMode ? 'text-gray-200' : 'text-gray-700'
          )}>
            الجنس
          </label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className={cn(
              'w-full px-4 py-2 rounded-lg border',
              settings.darkMode
                ? 'bg-gray-700 border-gray-600 text-white'
                : 'bg-white border-gray-300 text-gray-900',
              'focus:ring-2 focus:ring-blue-500'
            )}
          >
            <option value="">اختر الجنس</option>
            <option value="male">ذكر</option>
            <option value="female">أنثى</option>
            <option value="other">آخر</option>
          </select>
        </div>

        <div>
          <label className={cn(
            'block text-sm font-medium mb-2',
            settings.darkMode ? 'text-gray-200' : 'text-gray-700'
          )}>
            تاريخ الميلاد
          </label>
          <div className="relative">
            <input
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              className={cn(
                'w-full px-4 py-2 rounded-lg border',
                settings.darkMode
                  ? 'bg-gray-700 border-gray-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900',
                'focus:ring-2 focus:ring-blue-500'
              )}
            />
            <CakeIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div>
          <label className={cn(
            'block text-sm font-medium mb-2',
            settings.darkMode ? 'text-gray-200' : 'text-gray-700'
          )}>
            الاهتمامات
          </label>
          <div className="flex flex-wrap gap-2 mb-2">
            {formData.interests.map((interest) => (
              <span
                key={interest}
                className={cn(
                  'inline-flex items-center px-3 py-1 rounded-full text-sm',
                  settings.darkMode
                    ? 'bg-gray-700 text-white'
                    : 'bg-blue-100 text-blue-800'
                )}
              >
                {interest}
                <button
                  type="button"
                  onClick={() => handleRemoveInterest(interest)}
                  className="ml-2 hover:text-red-500"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                name="newInterest"
                value={formData.newInterest}
                onChange={handleChange}
                placeholder="أضف اهتماماً جديداً"
                className={cn(
                  'w-full px-4 py-2 rounded-lg border',
                  settings.darkMode
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500',
                  'focus:ring-2 focus:ring-blue-500'
                )}
              />
              <TagIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <button
              type="button"
              onClick={handleAddInterest}
              className={cn(
                'px-4 py-2 rounded-lg',
                settings.darkMode
                  ? 'bg-blue-600 hover:bg-blue-700'
                  : 'bg-blue-500 hover:bg-blue-600',
                'text-white'
              )}
            >
              إضافة
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-3 pt-6 border-t">
        <button
          type="button"
          onClick={onCancel}
          className={cn(
            'px-4 py-2 rounded-lg',
            settings.darkMode
              ? 'bg-gray-700 text-white hover:bg-gray-600'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          )}
        >
          إلغاء
        </button>
        <button
          type="submit"
          className={cn(
            'px-4 py-2 rounded-lg',
            settings.darkMode
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-blue-500 hover:bg-blue-600',
            'text-white'
          )}
        >
          حفظ التغييرات
        </button>
      </div>
    </form>
  );
}

export default ProfileSettings;