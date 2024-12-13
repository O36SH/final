import { useState, useRef } from 'react';

/**
 * خطاف مخصص لإدارة حالة مكون الإدخال
 */
export function useChatInput(onSendMessage) {
  const [message, setMessage] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [showActions, setShowActions] = useState(false);
  const fileInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() || selectedImage) {
      onSendMessage({
        type: selectedImage ? 'image' : 'text',
        content: selectedImage || message.trim()
      });
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
      reader.onload = (e) => setSelectedImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return {
    message,
    selectedImage,
    showActions,
    fileInputRef,
    handleSubmit,
    handleImageSelect,
    handleRemoveImage,
    setMessage,
    setShowActions
  };
}