/**
 * توليد معرف فريد للرسالة
 * @returns {string} معرف الرسالة
 */
export function generateMessageId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

/**
 * تنسيق وقت الرسالة بالشكل المناسب
 * @param {string} timestamp - الطابع الزمني
 * @returns {string} الوقت المنسق
 */
export function formatMessageTime(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleTimeString('ar-SA', { 
    hour: '2-digit', 
    minute: '2-digit' 
  });
}