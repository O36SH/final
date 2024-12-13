/**
 * تنسيق وقت الرسالة
 */
export function formatMessageTime(timestamp) {
  const date = new Date(timestamp);
  const now = new Date();
  
  // نفس اليوم
  if (date.toDateString() === now.toDateString()) {
    return date.toLocaleTimeString('ar-SA', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }
  
  // خلال الأسبوع
  if (now - date < 7 * 24 * 60 * 60 * 1000) {
    return date.toLocaleDateString('ar-SA', {
      weekday: 'long'
    });
  }
  
  // التاريخ الكامل
  return date.toLocaleDateString('ar-SA');
}

/**
 * تنسيق حالة الرسالة
 */
export function formatMessageStatus(status) {
  switch (status) {
    case 'sent':
      return 'تم الإرسال';
    case 'delivered':
      return 'تم التوصيل';
    case 'read':
      return 'تمت القراءة';
    default:
      return '';
  }
}