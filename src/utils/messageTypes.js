/**
 * أنواع الرسائل المدعومة في التطبيق
 */
export const MessageType = {
  // رسالة نصية عادية
  TEXT: 'text',
  // رسالة تحتوي على صورة
  IMAGE: 'image',
  // رسالة صوتية
  AUDIO: 'audio',
  // رسالة فيديو
  VIDEO: 'video',
  // رسالة ملف
  FILE: 'file'
};

/**
 * حالات الرسالة المختلفة
 */
export const MessageStatus = {
  // جاري الإرسال
  SENDING: 'sending',
  // تم الإرسال
  SENT: 'sent',
  // تم التسليم
  DELIVERED: 'delivered',
  // تمت القراءة
  READ: 'read',
  // فشل الإرسال
  FAILED: 'failed'
};