import React, { useState, useRef } from 'react';
import { useSettings } from '../../contexts/SettingsContext';
import { MessageType } from '../../utils/messageTypes';
import { 
  PaperAirplaneIcon, 
  PhotoIcon,
  FaceSmileIcon,
  MicrophoneIcon,
  StopIcon,
  PlusIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { cn } from '../../utils/styles';
import EmojiPicker from '../common/EmojiPicker';

function ChatInput({ onSendMessage }) {
  const { settings } = useSettings();
  const [message, setMessage] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [showActions, setShowActions] = useState(false);
  const fileInputRef = useRef(null);
  const inputRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const timerRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() || selectedImage) {
      const messageData = selectedImage 
        ? {
            type: MessageType.IMAGE,
            content: selectedImage
          }
        : {
            type: MessageType.TEXT,
            content: message.trim()
          };
      
      onSendMessage(messageData);
      setMessage('');
      setSelectedImage(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
        setShowActions(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleEmojiSelect = (emoji) => {
    const start = inputRef.current.selectionStart;
    const end = inputRef.current.selectionEnd;
    const newMessage = message.slice(0, start) + emoji + message.slice(end);
    setMessage(newMessage);
    
    setTimeout(() => {
      inputRef.current.selectionStart = start + emoji.length;
      inputRef.current.selectionEnd = start + emoji.length;
      inputRef.current.focus();
    }, 0);
    
    setShowEmojiPicker(false);
  };

  return (
    <div className={cn(
      'fixed bottom-0 left-0 right-0 z-40',
      'border-t pb-[env(safe-area-inset-bottom)]',
      settings.darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
    )}>
      <div className="w-full max-w-screen-xl mx-auto">
        <form onSubmit={handleSubmit} className="px-4 py-3">
          {selectedImage && (
            <div className="relative mb-3">
              <img
                src={selectedImage}
                alt="Selected"
                className="max-h-32 rounded-lg"
              />
              <button
                type="button"
                onClick={handleRemoveImage}
                className="absolute top-1 right-1 p-1 rounded-full bg-gray-900/50 text-white hover:bg-gray-900/75"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>
          )}

          <div className="flex items-center gap-2">
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              onChange={handleImageSelect}
              className="hidden"
            />

            {(message.trim() || selectedImage) && (
              <button
                type="submit"
                className={cn(
                  'p-2 rounded-full transition-all',
                  settings.darkMode
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-blue-500 text-white hover:bg-blue-600'
                )}
              >
                <PaperAirplaneIcon className="h-6 w-6" />
              </button>
            )}

            <input
              ref={inputRef}
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="اكتب رسالتك..."
              className={cn(
                'flex-1 rounded-full px-4 py-2',
                settings.darkMode
                  ? 'bg-gray-700 text-white placeholder-gray-400'
                  : 'bg-gray-100 text-gray-900 placeholder-gray-500',
                'focus:outline-none focus:ring-2 focus:ring-blue-500'
              )}
            />
            
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                className={cn(
                  'p-2 rounded-full',
                  settings.darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100',
                  showEmojiPicker && (settings.darkMode ? 'bg-gray-700' : 'bg-gray-100')
                )}
              >
                <FaceSmileIcon className="h-6 w-6 text-gray-500" />
              </button>
              
              <EmojiPicker
                isOpen={showEmojiPicker}
                onClose={() => setShowEmojiPicker(false)}
                onEmojiSelect={handleEmojiSelect}
              />
            </div>

            <div className="relative">
              <button
                type="button"
                onClick={() => setShowActions(!showActions)}
                className={cn(
                  'p-2 rounded-full transition-transform',
                  settings.darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100',
                  showActions && 'rotate-45'
                )}
              >
                <PlusIcon className="h-6 w-6 text-gray-500" />
              </button>

              {showActions && (
                <div className={cn(
                  'absolute bottom-full mb-2 right-0',
                  'rounded-lg shadow-lg p-2',
                  settings.darkMode ? 'bg-gray-700' : 'bg-white',
                  'flex flex-col gap-2'
                )}>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className={cn(
                      'p-2 rounded-full',
                      settings.darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-100'
                    )}
                  >
                    <PhotoIcon className="h-6 w-6 text-gray-500" />
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setShowActions(false);
                      startRecording();
                    }}
                    className={cn(
                      'p-2 rounded-full',
                      settings.darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-100'
                    )}
                  >
                    <MicrophoneIcon className="h-6 w-6 text-gray-500" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChatInput;