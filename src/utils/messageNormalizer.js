import { MessageType } from './messageTypes';

/**
 * تطبيع شكل الرسالة للتأكد من صحة البنية
 * @param {string|object} message - الرسالة المراد تطبيعها
 * @returns {object} الرسالة بعد التطبيع
 */
export function normalizeMessage(message) {
  // معالجة الرسائل النصية
  if (typeof message === 'string') {
    return {
      type: MessageType.TEXT,
      content: message
    };
  }

  // معالجة الكائنات
  if (typeof message === 'object') {
    // إذا كانت الرسالة تحتوي على النوع والمحتوى
    if (message.type && message.content) {
      return message;
    }
    
    // إذا كانت الرسالة تحتوي على المحتوى فقط
    if (message.content) {
      return {
        type: MessageType.TEXT,
        content: message.content
      };
    }
    
    // تحويل الكائن إلى نص
    return {
      type: MessageType.TEXT,
      content: message.toString()
    };
  }

  // الحالة الافتراضية - تحويل إلى نص
  return {
    type: MessageType.TEXT,
    content: String(message)
  };
}