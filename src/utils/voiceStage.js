/**
 * ثوابت المنصة الصوتية
 */
export const VOICE_STAGE_CONSTANTS = {
  // الحد الأقصى لعدد المتحدثين
  MAX_SPEAKERS: 6,
  
  // الحد الأقصى لمدة التسجيل (بالثواني)
  MAX_RECORDING_TIME: Infinity,
  
  // حجم عينة الصوت للكشف عن التحدث
  VOICE_DETECTION_BUFFER: 2048,
  
  // عتبة الكشف عن الصوت
  VOICE_THRESHOLD: 30
};

/**
 * تحويل الوقت من ثواني إلى تنسيق دقائق:ثواني
 * @param {number} seconds - عدد الثواني
 * @returns {string} الوقت بتنسيق "00:00"
 */
export function formatVoiceTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

/**
 * إنشاء معرف فريد للجلسة الصوتية
 * @returns {string} معرف الجلسة
 */
export function generateVoiceSessionId() {
  return `voice_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}