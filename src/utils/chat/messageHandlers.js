/**
 * معالجة الرسائل المختلفة
 */

/**
 * معالجة الرسائل النصية
 */
export function handleTextMessage(message, sender) {
  return {
    id: Date.now().toString(),
    type: 'text',
    content: message,
    sender,
    timestamp: new Date().toISOString()
  };
}

/**
 * معالجة رسائل الصور
 */
export function handleImageMessage(imageData, sender) {
  return {
    id: Date.now().toString(),
    type: 'image',
    content: imageData,
    sender,
    timestamp: new Date().toISOString()
  };
}