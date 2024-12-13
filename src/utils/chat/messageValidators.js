/**
 * التحقق من صحة الرسائل
 */

/**
 * التحقق من صحة الرسالة النصية
 */
export function validateTextMessage(message) {
  if (!message || typeof message !== 'string') {
    return false;
  }
  return message.trim().length > 0 && message.length <= 1000;
}

/**
 * التحقق من صحة رسالة الصورة
 */
export function validateImageMessage(image) {
  if (!image) return false;
  
  // التحقق من نوع الملف
  if (typeof image === 'string' && image.startsWith('data:image/')) {
    return true;
  }
  
  // التحقق من حجم الملف (max 5MB)
  if (image instanceof File) {
    return image.type.startsWith('image/') && image.size <= 5 * 1024 * 1024;
  }
  
  return false;
}