import { useRef, useEffect } from 'react';

/**
 * خطاف مخصص لإدارة قائمة الرسائل
 */
export function useMessageList(messages) {
  const messagesEndRef = useRef(null);

  // التمرير التلقائي عند إضافة رسائل جديدة
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return { messagesEndRef };
}