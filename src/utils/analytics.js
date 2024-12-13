/**
 * أدوات تحليلات التطبيق
 * تتبع سلوك المستخدم وأداء التطبيق
 */
export const analytics = {
  /**
   * تتبع أحداث المستخدم
   * @param {string} eventName - اسم الحدث
   * @param {object} data - بيانات الحدث
   */
  trackEvent: (eventName, data = {}) => {
    try {
      console.log(`[Analytics] ${eventName}:`, data);
      // هنا يتم إرسال البيانات إلى خدمة التحليلات
    } catch (error) {
      console.error('خطأ في التحليلات:', error);
    }
  },

  /**
   * تتبع مقاييس الأداء
   * @param {object} metric - مقياس الأداء
   */
  trackPerformance: (metric) => {
    try {
      const { name, value, rating } = metric;
      console.log(`[Performance] ${name}: ${value}ms (${rating})`);
      // هنا يتم إرسال بيانات الأداء إلى خدمة المراقبة
    } catch (error) {
      console.error('خطأ في تتبع الأداء:', error);
    }
  },

  /**
   * تتبع الأخطاء
   * @param {Error} error - الخطأ
   * @param {object} context - سياق الخطأ
   */
  trackError: (error, context = {}) => {
    try {
      console.error(`[Error] ${error.message}`, {
        stack: error.stack,
        context
      });
      // هنا يتم إرسال بيانات الخطأ إلى خدمة تتبع الأخطاء
    } catch (err) {
      console.error('فشل تتبع الخطأ:', err);
    }
  }
};